import type { Config } from "@jest/types";

const workingDir = ".";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [`<rootDir>/src/${workingDir}/**/*.ts`],
  testMatch: [`<rootDir>/test/${workingDir}/**/*.ts`],
};

export default config;
