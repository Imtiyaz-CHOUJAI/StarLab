module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", "jsx"],
      },
    ],
    "prettier/prettier": "error",
    "max-len": ["error", 80],
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
