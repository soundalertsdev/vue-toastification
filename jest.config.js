module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  transform: {
    "^.+\\.(css|less|scss)$": "./tests/utils/styleMock.js",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
