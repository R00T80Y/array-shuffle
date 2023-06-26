// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  bracketSameLine: false,
  quoteProps: 'preserve',
  overrides: [
    {
      'files': '*.yml',
      'options': {
        'singleQuote': false,
      },
    },
  ],
  plugins: [require('@ianvs/prettier-plugin-sort-imports')],
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/config/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/ui/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
};
