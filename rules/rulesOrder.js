module.exports = [
  'dollar-variables',
  { hasBlock: false, name: 'extend', type: 'at-rule' },
  { hasBlock: false, name: 'include', parameter: 'type', type: 'at-rule' },
  { name: 'include', type: 'at-rule' },
  'declarations',
  { hasBlock: false, type: 'at-rule' },
  { name: 'media', type: 'at-rule' },
  { hasBlock: true, type: 'at-rule' },
  { label: 'pseudo-content ("&::before/&::after")', selector: /^&?::[\w-]+$/, type: 'rule' },
  { label: 'a pseudo-class ("&:pseudo")', selector: /^&:(.|\n)+[^&]$/, type: 'rule' },
  { label: 'an attribute ("&[attr]")', selector: /^&\[(.|\n)+$/, type: 'rule' },
  { label: 'a BEM modifier ("&.-mod")', selector: /^&\.-\w+[^&]$/, type: 'rule' },
  { label: 'a twin selector ("& +/~ &")', selector: /^&[\s~+]+&$/, type: 'rule' },
  { label: 'a child of (".parent &")', selector: /^[^&~+>]+$/, type: 'rule' },
  {
    label: 'a nested/sibling of parent (".class >/+/~ &")',
    selector: /^[\w.&][^[_][^+~](.|\n)+&$/,
    type: 'rule'
  },
  { label: 'a BEM element ("&__elem")', selector: /^&__(.|\n)+$/, type: 'rule' },
  { label: 'the first keyframe of an animation ("from/0%")', selector: /^(from|0%)$/, type: 'rule' },
  { label: 'an animation keyframe ("[1-99]%")', selector: /^(\d\d?%)$/, type: 'rule' },
  { label: 'the last keyframe of an animation ("to/100%")', selector: /^(to|100%)$/, type: 'rule' }
]
