const selectorRules = {
  isKeyframesStart: { type: 'rule', selector: /^(from|0%)$/ },
  isKeyframesStep: { type: 'rule', selector: /^(\d\d?%)$/ },
  isKeyframesEnd: { type: 'rule', selector: /^(to|100%)$/ },
  isPseudoContent: { type: 'rule', selector: /^&?::[\w-]+$/ },
  isChild: { type: 'rule', selector: /^[^&~+>]+$/ },
  isSiblingOrChildOf: { type: 'rule', selector: /^[\w.&][^[_](.|\n)+&?$/ },
  isTwin: { type: 'rule', selector: /^&[\s~+]+&$/ },
  hasModifier: { type: 'rule', selector: /^\.-(.|\n)+[^&]$/ },
  hasAttribute: { type: 'rule', selector: /^&\[(.|\n)+$/ },
  hasState: { type: 'rule', selector: /^&:(.|\n)+[^&]$/ },
  isBemElement: { type: 'rule', selector: /^&__(.|\n)+$/ }
}

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
