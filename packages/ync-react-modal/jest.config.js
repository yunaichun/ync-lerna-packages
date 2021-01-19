const {defaults} = require('jest-config');
module.exports = {
    verbose: true,
    moduleFileExtensions: [
      ...defaults.moduleFileExtensions,
      "js",
      "jsx"
    ],
    transform: {
        '^.+\\.js$': ['babel-jest']
    },
    moduleNameMapper: {
        '\\.(css|scss|less|svg|png)$': 'identity-obj-proxy'
    }
}