module.exports = {
  extends: ['custom/next'],
  plugins: ['custom'],
  rules: {
    'custom/no-old-method': 2,
    'custom/no-persian-character': 2,
    'custom/no-persian-jsx': 2,
    'custom/no-persian-var': 2,
  },
  overrides: [
    {
      files: ['themeRegistry.tsx'],
      rules: {
        'react/hook-use-state': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/unbound-method': 'off',
        // '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
      },
    },
  ],
}
