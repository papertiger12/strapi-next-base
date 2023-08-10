module.exports = {
  root: true,
  extends: ["custom"],
  globals: {
    strapi: true
  },
  env: {
    ommonjs: true,
    s6: true,
    ode: true,
    rowser: false
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false
    },
    sourceType: "module"
  }
}


