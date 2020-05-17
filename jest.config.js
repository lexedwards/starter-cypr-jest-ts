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
      statements: 15,
      branches: 10,
      functions: 15,
      lines: 15,
    },
  },
  projects: ['./test/jest.lint.js', './test/jest.client.js'],
}
