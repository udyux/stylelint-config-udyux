module.exports = [
  'dollar-variables',
  'custom-properties',
  { name: 'extend', type: 'at-rule' },
  { hasBlock: false, type: 'at-rule' },
  'declarations',
  { name: 'media', type: 'at-rule' },
  { hasBlock: true, type: 'at-rule' },
  { name: 'pseudo-content ("&::before/&::after")', selector: /^&?::(.|\n)+$/, type: 'rule' },
  {
    name: 'modifier or state',
    selector: /^((&:|&\.|&--)[^\s]+(nth-(last-)?(child|of-type)(\([n+-\d\s]+\))?)?(,\n?\s*)?)+$/,
    type: 'rule'
  },
  { name: 'sibling relation selector', selector: /^&\s?[+~]\s?&$/, type: 'rule' },
  { name: 'BEM element ("&__elem") or child', selector: /^(&__(.|\n)+(,\n)?|&\s|[a-z[.:])+$/, type: 'rule' },
  { name: 'first keyframe of an animation', selector: /^(from|0%)$/, type: 'rule' },
  { name: 'animation keyframe', selector: /^(\d\d?%)$/, type: 'rule' },
  { name: 'last keyframe of an animation ', selector: /^(to|100%)$/, type: 'rule' },
  { name: 'return', type: 'at-rule' }
]
