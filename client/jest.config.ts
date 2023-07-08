module.exports = {
  modulePaths: ["/shared/vendor/modules"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],
  moduleNameMapper: {
    "^@(components|styles|hooks|utils|customTypes|apis|pages|constants)/(.*)$":
      "<rootDir>/src/$1/$2",
    "\\.(png|jpg|svg|css|less)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.png$"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
};

export {};
