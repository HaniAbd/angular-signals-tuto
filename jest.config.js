/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transform: {
    "^.+\\.(ts|js|mjs|html)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(@angular|rxjs|primeng)/)"],
};
