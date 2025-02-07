module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest for TypeScript and JSX
  },
  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy", // Mock CSS imports
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock assets
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file for testing-library
  collectCoverage: true,
  collectCoverageFrom: [
    "app/components/**/*.{ts,tsx}",
    "!**/node_modules/**",
  ],
};
