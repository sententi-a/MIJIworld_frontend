module.exports = {
  modulePaths: ["/shared/vendor/modules"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],
  moduleNameMapper: {
    "^@(components|assets|styles|hooks|utils|customTypes|apis|pages|constants)/(.*)$":
      "<rootDir>/src/$1",
    // "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileTransformer.js",
    "\\.(css|less|png|jpg|svg)$": "identity-obj-proxy",
  },
};

// "jest": {
//   "moduleNameMapper": {
//     "^@(components|assets|styles|contexts|hooks|utils)/(.*)$": "<rootDir>/src/$1/$2",
//     ".+\\.(css|less|jpg|jpeg|png|svg)$": "identity-obj-proxy"
//   }
// },
