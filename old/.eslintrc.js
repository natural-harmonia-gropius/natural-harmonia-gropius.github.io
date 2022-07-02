module.exports = {
  root: true,
  env: { node: true },
  parserOptions: { ecmaVersion: 2020 },

  extends: ["plugin:vue/recommended", "@vue/airbnb", "@vue/typescript/recommended"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
