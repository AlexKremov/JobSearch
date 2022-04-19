module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  ignorePatterns: [".eslintrc.js"],
  plugins: ["react", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  rules: {
    "react/function-component-definition": [
      1,
      {
        namedComponents: "function-declaration",
      },
    ],
    "react/destructuring-assignment": 0,

    semi: 0,
    "import/no-cycle": 0,
    "comma-dangle": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/comma-dangle": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
