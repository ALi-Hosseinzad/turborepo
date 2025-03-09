module.exports = {
  extends: ['custom/next'],
  overrides: [
    {
      files: ['themeRegistry.tsx'],
      rules: {
        'react/hook-use-state': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
  ],
}
