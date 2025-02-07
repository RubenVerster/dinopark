/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy", 
    "^@/(.*)$": "<rootDir>/$1", 
  },
  transformIgnorePatterns: ["/node_modules/"], 
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], 
};
