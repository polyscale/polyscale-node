module.exports = {
    transform: {
      ".(ts|tsx)": "ts-jest"
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    setupFiles: [],
    testPathIgnorePatterns: [
      "node_modules",
      "dist",
      "lib"
    ],
    coveragePathIgnorePatterns: [
      "src/proto",
      "/node_modules/"
    ]
  }
