module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    // 不实用分号
    'semi': 0,
    // 允许使用console
    "no-console": 0,
    // 不用必须把依赖引入到dependencies
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true
    }],
    // 对象数组键值对最后一个逗号不要
    "comma-dangle": [2, "never"],
    // 解决全局require()报错
    "global-require": 0
  }
}