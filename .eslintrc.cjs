module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    uni: true,
    wx: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'elemefe',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      // 匹配views和二级目录中的index.vue
      files: ['src/pages/**', 'src/components/**'],
      rules: {
        // 给上面匹配的文件指定规则
        'vue/multi-word-component-names': 'off'
      }
    }
  ],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }]
  }
}
