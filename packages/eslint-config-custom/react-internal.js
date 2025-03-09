const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@next/next/no-html-link-for-pages': 'off', //FIXME:do it now turn it on
    '@typescript-eslint/no-unsafe-return': 'off', //FIXME:do it now turn it on
    '@typescript-eslint/no-base-to-string': 'off', //FIXME:do it now turn it on
    '@typescript-eslint/no-unnecessary-condition': 'off', //TODO:do it LATER
    '@typescript-eslint/no-unsafe-argument': 'off', //FIXME:do it now turn it on
    '@typescript-eslint/no-dynamic-delete': 'off',
    eqeqeq: 'off', //TODO:think about it in file axiosInterceptors
    'import/no-default-export': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          kebabCase: true,
        },
      },
    ],
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off', //its for localstorage
    'import/no-useless-path-segments': 'off', //TODO:its related to relative path in ui change it later
    'import/no-extraneous-dependencies': 'off', //if used package is not in package.json
    '@typescript-eslint/no-unsafe-call': 'off', //TODO:tableCustom head in headerinfo.map
    '@typescript-eslint/no-unsafe-member-access': 'off', //TODO:tableCustom head in headerinfo.map
    'react/function-component-definition': 'off', //TODO:turn it on later
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        // shorthandFirst: true,
        // shorthandLast: false,
        // multiline: 'last', //dont know
        // multiline: 'ignore' | 'first' | 'last',
        // ignoreCase: false,
        // reservedFirst: false,
        // locale: 'auto' | 'any valid locale',
        noSortAlphabetically: true, //dont sort alphabetically if true
      },
    ],
    'import/order': 'off',
  },
  overrides: [
    {
      files: ['icons.tsx'],
      rules: {
        'react/no-unknown-property': 'off',
        '@typescript-eslint/parser': 'off',
        'react/no-unknown-property': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
}
