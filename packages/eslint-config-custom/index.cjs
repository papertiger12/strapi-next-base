module.exports = {
  extends: ['next', 'turbo', 'plugin:prettier/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/react-in-jsx-scope': 'off',
  },
  plugins: ['prettier'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
