module.exports = {
  editorconfig: true,
  // useTabs: false,
  // tabWidth: 2,
  // printWidth: 80,
  // endOfLine: 'lf',

  semi: true,
  singleQuote: true,
  quoteProps: 'preserve',

  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,

  arrowParens: 'always',
  singleAttributePerLine: true,

  overrides: [
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
