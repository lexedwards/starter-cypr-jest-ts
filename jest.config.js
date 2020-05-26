module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx|ts|tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '**/__tests__/**',
    '**/public/**',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  projects: ['./test/jest.lint.js', './test/jest.client.js'],
}
