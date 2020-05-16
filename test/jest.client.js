module.exports = {
  ...require('./jest-common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    'jest-axe/extend-expect',
    '@testing-library/jest-dom/extend-expect',
  ],
}
