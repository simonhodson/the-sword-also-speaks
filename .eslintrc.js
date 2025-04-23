const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  ignorePatterns: [
    'node_modules',
    'ios',
    'android',
    'metro.config.js',
    'template-*.tsx',
    'template-*.ts',
  ],
  extends: [
    '@react-native',
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended', // <-- added to solve export enum no unused vars
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort', 'sort-destructure-keys', 'react-hooks'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    /* ERROR */
    'array-callback-return': [ERROR, {checkForEach: true}],
    'no-await-in-loop': ERROR,
    'no-new-native-nonconstructor': ERROR,
    'no-self-compare': ERROR,
    'no-unused-private-class-members': ERROR,
    'accessor-pairs': [ERROR, {getWithoutSet: false}],
    'class-methods-use-this': ERROR,
    'no-useless-return': ERROR,
    'semi-spacing': [OFF],
    curly: [ERROR, 'all'],
    eqeqeq: [ERROR, 'always'],
    camelcase: [WARN, {properties: 'never'}],

    /* WARN */
    'constructor-super': WARN,
    'no-unreachable-loop': WARN,
    'no-use-before-define': [WARN, {variables: false}],
    'block-scoped-var': WARN,
    'max-depth': [WARN, 4],
    'prefer-const': [
      WARN,
      {destructuring: 'any', ignoreReadBeforeAssign: true},
    ],

    /* Plugins */
    'react-native/no-inline-styles': [OFF],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': [
      ERROR,
      {caseSensitive: false},
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
