const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    'eslint-config-turbo',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
    next: {
      rootDir: ['apps/admin', 'apps/client'], //this is for error of html `no-html-link-for-pages` for monorepos
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'import/no-cycle': 'off',
    'react/no-array-index-key': 'off',
    'prefer-node-protocol': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'eslint-plugin-unicorn': 'off',
    'unicorn/prefer-node-protocol': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    'react/hook-use-state': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'react-hooks/exhaustive-deps': 'off', //no dependency error
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/order': 'off', //TODO:turn it on = >apps\admin\src\views\layouts\sideBar on ./sideBarItem/view'
    '@typescript-eslint/no-unsafe-argument': 'off', //FIXME:do it now turn it on
    '@next/next/no-html-link-for-pages': 'off', //FIXME:do it now turn it on
    '@typescript-eslint/no-unsafe-return': 'off', //FIXME:do it now turn it on
    '@typescript-eslint/no-base-to-string': 'off', //FIXME:do it now turn it on
    '@typescript-eslint/no-unnecessary-condition': 'off', //TODO:do it LATER
    'react/jsx-key': 'off', //TODO:do it LATER
    '@typescript-eslint/no-confusing-void-expression': 'off', //this and on line 50 must be removed
    '@next/next/no-img-element': 'off', //this and on line 50 must be removed
    '@typescript-eslint/explicit-function-return-type': 'off',
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
    'no-eval': 'off',
    'jsx-a11y/no-autofocus': 'off', //for regex
    'no-useless-escape': 'off', //for regex
    'prefer-named-capture-group': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off', //its for localstorage
    'import/no-extraneous-dependencies': 'off', //if used package is not in package.json
    '@typescript-eslint/no-unsafe-call': 'off', //TODO:tableCustom head in headerinfo.map
    '@typescript-eslint/no-unsafe-member-access': 'off', //TODO:tableCustom head in headerinfo.map
    'react/function-component-definition': 'off', //TODO:turn it on later
    '@typescript-eslint/no-unsafe-assignment': 'off', //TODO:turn it on on file components table  bodyInfo={bodyInfo}
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
    // 'import/order': [
    //   'error',
    //   {
    //     groups: [
    //       'external',
    //       'internal',
    //       'object',
    //       'index',
    //       'builtin',
    //       'sibling',
    //       'parent',
    //     ],
    //   },
    // ],
  },
  overrides: [
    {
      files: ['httpService.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-return': 'off',
      },
    },
  ],
}
