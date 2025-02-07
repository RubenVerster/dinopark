module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Use Babel to transform JS, JSX, TS, and TSX
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS files
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock static assets
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Optional Jest setup file
};
