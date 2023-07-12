module.exports = {
  modulePaths: ["/shared/vendor/modules"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],
  moduleNameMapper: {
    "^@(components|styles|hooks|utils|customTypes|apis|pages|constants)/(.*)$":
      "<rootDir>/src/$1/$2",
    "\\.(css|less)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|svg|gif|webp|ttf|woff|woff2)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.png$"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  testEnvironment: "jsdom",
};

export {};
