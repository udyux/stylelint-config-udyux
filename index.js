'use strict'

const rules = require('./rules')

module.exports = {
  rules,
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties'
  ]
}
