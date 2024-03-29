'use strict'

const rules = require('./rules')

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules
}
