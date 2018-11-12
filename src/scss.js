const scssNamePattern = /^[a-z][a-z-]*[a-z]$/

module.exports = {
  'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
  'scss/at-else-closing-brace-space-after': 'always-intermediate',
  'scss/at-else-empty-line-before': 'never',
  'scss/at-else-if-parentheses-space-before': 'always',
  'scss/at-function-parentheses-space-before': 'never',
  'scss/at-function-pattern': scssNamePattern,
  'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
  'scss/at-if-closing-brace-space-after': 'always-intermediate',
  'scss/at-mixin-argumentless-call-parentheses': 'always',
  'scss/at-mixin-parentheses-space-before': 'never',
  'scss/at-mixin-pattern': scssNamePattern,
  'scss/dollar-variable-colon-space-after': 'always',
  'scss/dollar-variable-no-missing-interpolation': true,
  'scss/percent-placeholder-pattern': scssNamePattern,
  'scss/double-slash-comment-whitespace-inside': 'always',
  'scss/declaration-nested-properties-no-divided-groups': true,
  'scss/operator-no-unspaced': true,
  'scss/no-duplicate-dollar-variables': [true, { ignoreInside: ['at-rule'] }]
}
