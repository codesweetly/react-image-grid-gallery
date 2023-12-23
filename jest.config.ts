import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jestCryptoSetup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
