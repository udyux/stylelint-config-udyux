module.exports = [
  'dollar-variables',
  { name: 'extend', type: 'at-rule' },
  { hasBlock: false, type: 'at-rule' },
  'declarations',
  { name: 'media', type: 'at-rule' },
  { hasBlock: true, type: 'at-rule' },
  { label: 'pseudo-content ("&::before/&::after")', selector: /^&?::(.|\n)+$/, type: 'rule' },
  { label: 'a modifier, state or relative', selector: /^(&:|&\.|&-|&\s|[a-z[.:])/, type: 'rule' },
  { label: 'a BEM element ("&__elem")', selector: /^(&__(.|\n)+(,\n)?)+$/, type: 'rule' },
  { label: 'the first keyframe of an animation', selector: /^(from|0%)$/, type: 'rule' },
  { label: 'an animation keyframe', selector: /^(\d\d?%)$/, type: 'rule' },
  { label: 'the last keyframe of an animation ', selector: /^(to|100%)$/, type: 'rule' }
]
