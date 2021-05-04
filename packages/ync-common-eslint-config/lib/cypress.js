module.exports = {
  extends: ['plugin:cypress/recommended'],
  globals: {
    cy: true,
    Cypress: true,
  },
  env: {
    'cypress/globals': true,
  },
};
