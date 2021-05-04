module.exports = {
  extends: ['eslint-config-airbnb', 'eslint-config-airbnb/hooks', 'prettier'],

  rules: {
    // react-propTypes
    'react/prop-types': ['warn'],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
