module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    semi: ['error', 'never'],
    'key-spacing': 'off',
    'jsx-quotes': [2, 'prefer-double'],
    'max-len': [2, 120, 2],
    'object-curly-spacing': [2, 'never'],
    'comma-dangle': [
      1,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-multiple-empty-lines': 'error',
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}],
    'no-unused-vars': ['error', {args: 'after-used'}],
    'import/extensions': ['warn', 'never'],
    'arrow-parens': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'warn',
    'consistent-return': 'off',
    'react/require-default-props': 'off',
  },
}
