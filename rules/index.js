const scssRules = require('./scss')
const orderRules = require('./order')

const namingPattern = /^[a-z_-]+$/

module.exports = {
  ...scssRules,
  ...orderRules,
  'plugin/declaration-block-no-ignored-properties': true,
  'scale-unlimited/declaration-strict-value': [
    '/color/',
    { ignoreKeywords: ['white', 'black', 'transparent', 'inherit', 'currentColor'] }
  ],
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['after-comment', 'blockless-after-blockless'],
      ignoreAtRules: ['else', 'extend', 'include', 'return']
    }
  ],
  'at-rule-name-newline-after': 'always-multi-line',
  'at-rule-name-space-after': 'always-single-line',
  'at-rule-name-case': 'lower',
  'at-rule-semicolon-space-before': 'never',
  'block-closing-brace-newline-after': ['always', { ignoreAtRules: ['if', 'else'] }],
  'block-closing-brace-newline-before': 'always-multi-line',
  'block-closing-brace-empty-line-before': 'never',
  'block-opening-brace-newline-after': 'always-multi-line',
  'block-opening-brace-space-before': 'always',
  'color-hex-case': 'upper',
  'comment-empty-line-before': null,
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-block-no-shorthand-property-overrides': true,
  'declaration-block-semicolon-newline-after': 'always',
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-trailing-semicolon': 'always',
  'declaration-colon-newline-after': 'always-multi-line',
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  'declaration-empty-line-before': 'never',
  'declaration-no-important': true,
  'font-family-no-duplicate-names': null,
  'font-weight-notation': 'numeric',
  'function-comma-newline-after': 'always-multi-line',
  'function-comma-newline-before': 'never-multi-line',
  'function-comma-space-after': 'always',
  'function-comma-space-before': 'never',
  'function-max-empty-lines': 0,
  'function-name-case': 'lower',
  'function-parentheses-newline-inside': 'always-multi-line',
  'function-parentheses-space-inside': 'never',
  'function-url-quotes': ['always', { except: ['empty'] }],
  indentation: [
    2,
    {
      baseIndentLevel: 0,
      indentClosingBrace: false,
      indentInsideParens: 'once-at-root-twice-in-block'
    }
  ],
  'max-empty-lines': 1,
  'max-line-length': 120,
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'never',
  'media-feature-name-case': 'lower',
  'media-feature-parentheses-space-inside': 'never',
  'media-query-list-comma-newline-after': 'always-multi-line',
  'media-query-list-comma-space-after': 'always-single-line',
  'media-query-list-comma-space-before': 'never',
  'no-eol-whitespace': true,
  'no-extra-semicolons': null,
  'no-unknown-animations': true,
  'number-leading-zero': 'always',
  'number-no-trailing-zeros': null,
  'property-case': 'lower',
  'rule-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['after-comment']
    }
  ],
  'selector-attribute-brackets-space-inside': 'never',
  'selector-class-pattern': [namingPattern, { resolveNestedSelectors: true }],
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': true,
  'selector-list-comma-newline-after': 'always',
  'selector-list-comma-newline-before': 'never-multi-line',
  'selector-list-comma-space-before': 'never',
  'selector-max-empty-lines': null,
  'selector-max-id': 0,
  'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-case': 'lower',
  'selector-type-case': 'lower',
  'unit-case': 'lower',
  'value-keyword-case': 'lower',
  'value-list-comma-newline-after': 'always-multi-line',
  'value-list-comma-newline-before': 'never-multi-line',
  'value-list-comma-space-after': 'always-single-line',
  'value-list-comma-space-before': 'never',
  'value-list-max-empty-lines': 1,
  'string-quotes': null
}
