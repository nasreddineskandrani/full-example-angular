module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src/app'],
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'jsdom',
  verbose: false,
  bail: true,
  silent: false,
  automock: false,
  collectCoverage: true
};
