const { execSync } = require('child_process')
const { version } = require('./package.json')

const [releaseVersion = '', ...argv] = process.argv.slice(2)

const regex = {
  keepMajorMinor: [/^(\d+\.\d+).*$/, '$1'],
  tagFlags: /^(?:-t|--tag)$/,
  validVersion: /^(?:(?:\d+\.?){3}|(?:major|minor|patch))/,
  versionKeywords: /^(?:(major)|(minor)|(patch))$/
}

const logVersionInfo = () =>
  console.error(`The first argument must be either
  • a valid semver version eg. 1.2.3
  • a release keyword \`major | minor | patch\`
`)

const parseVersionKeyword = bumpKeyword =>
  bumpKeyword.replace(regex.versionKeywords, (...matches) => {
    const index = matches.slice(1, -2).findIndex(str => !!str)

    const versionMap = version
      .replace(/((?:\d+\.){2}\d+).*/, '$1')
      .trim()
      .split('.')
      .map(Number)

    return versionMap
      .map((num, i) => {
        if (i < index) return num
        return i === index ? num + 1 : 0
      })
      .join('.')
  })

const argumentMap = new Map(
  argv.reduce((argMap, arg) => {
    const mappedFlag = arg.replace(regex.tagFlags, '--tag')
    const [lastArg] = argMap.splice(-1)
    if (!lastArg) return [mappedFlag]
    return Array.isArray(lastArg) ? [...argMap, lastArg, mappedFlag] : [...argMap, [lastArg, arg]]
  }, [])
)

const currentBranch = execSync(`git symbolic-ref HEAD | cut -d'/' -f3,4`)
  .toString()
  .trim()

const argumentKeyValues = Array.from(argumentMap)
  .reduce((args, v) => [...args, ...v], [])
  .join(' ')

if (!releaseVersion || !releaseVersion.length) {
  console.error('\nMissing version. Aborting release...')
  logVersionInfo()
  process.exit(1)
}

if (!regex.validVersion.test(releaseVersion)) {
  console.error(`\nInvalid version. Aborting release...`)
  logVersionInfo()
  process.exit(1)
}

if (currentBranch !== 'master') {
  console.error('\nYou must be on branch `master`. Aborting release...\n')
  process.exit(1)
}

const newVersion = regex.versionKeywords.test(releaseVersion) ? parseVersionKeyword(releaseVersion) : releaseVersion
argumentMap.set('--new-version', newVersion)
const releaseBranch = `release/${argumentMap.get('--new-version').replace(...regex.keepMajorMinor)}`

execSync(`yarn publish ${argumentKeyValues}`)

try {
  execSync(`git checkout -b ${releaseBranch} > /dev/null 2>&1`)
} catch (e) {
  execSync(`git checkout ${releaseBranch} > /dev/null 2>&1`)
}

execSync(`git merge master && git push -u origin ${releaseBranch} && git checkout master`)
