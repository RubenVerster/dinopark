module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }]
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/node_modules/@testing-library/jest-dom/"]
};
