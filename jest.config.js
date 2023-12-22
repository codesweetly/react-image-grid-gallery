/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jestCryptoSetup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
