// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: ['standard', 'esnext/style-guide', 'prettier'],
  rules: {
    'sort-imports': 0,
    'array-bracket-spacing': [2, 'never'],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'template-curly-spacing': ['warn', 'never'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'object-shorthand': 2,
    'no-var': 2,
    indent: [2, 2],
    'comma-dangle': [2, 'never'],
    'import/no-named-as-default': [1],
    'import/no-named-as-default-member': [1],
    'import/no-deprecated': [1],
    'import/no-extraneous-dependencies': [1],
    'import/no-mutable-exports': [1],
    'import/no-amd': [1],
    'import/order': [1],
    'import/no-unresolved': [2],
    'import/named': [2],
    'import/default': [2],
    'import/namespace': [2],
    'import/no-absolute-path': [2],
    'import/no-dynamic-require': [2],
    'import/no-internal-modules': [2],
    'import/no-self-import': [2],
    'import/no-cycle': [2],
    'import/no-useless-path-segments': [2],
    'import/no-unassigned-import': [2, { allow: ['babel-polyfill', 'startup', '*.css', '*.scss'] }]
  }
}
