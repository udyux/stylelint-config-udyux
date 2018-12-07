module.exports = {
  extends: ['./index.js', 'stylelint-config-prettier'],
  rules: {
    'at-rule-name-space-after': 'always-single-line',
    'color-hex-case': 'upper',
    'declaration-colon-newline-after': 'always-multi-line',
    'value-list-comma-newline-after': 'always-multi-line',
    indentation: 2
  }
}
