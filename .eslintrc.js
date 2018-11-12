// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: ['standard', 'esnext/style-guide', 'prettier'],
  rules: {
    'array-bracket-spacing': 'off',
    'generator-star-spacing': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 'off',
    'object-property-newline': 'off',
    'arrow-parens': 'off',
    camelcase: 'off',
    'new-cap': 'off',
    'no-eval': 'off',
    indent: 'off',
    semi: 'off',
    'comma-dangle': 'off'
  }
}
