const selectorRules = require('./selectorRules')

module.exports = [
  'dollar-variables',
  { type: 'at-rule', name: 'extend', hasBlock: false },
  { type: 'at-rule', name: 'include', parameter: 'type', hasBlock: false },
  { type: 'at-rule', name: 'include' },
  'declarations',
  { type: 'at-rule', hasBlock: false },
  { type: 'at-rule', name: 'media' },
  { type: 'at-rule', hasBlock: true },
  selectorRules.isKeyframesStart,
  selectorRules.isKeyframesStep,
  selectorRules.isKeyframesEnd,
  selectorRules.isPseudoContent,
  selectorRules.isChild,
  selectorRules.isSiblingOrChildOf,
  selectorRules.isTwin,
  selectorRules.hasModifier,
  selectorRules.hasAttribute,
  selectorRules.hasState,
  selectorRules.isBemElement
]
