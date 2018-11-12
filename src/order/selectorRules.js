module.exports = {
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
