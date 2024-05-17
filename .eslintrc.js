// Как появится esLint v9.0 обновиться до него
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      },
    ],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: ['error', 2, { SwitchCase: 1 }],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'react/no-array-index-key': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        suffix: ['T', 'Type'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        suffix: ['Enum'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
    ],
    // 'i18next/no-literal-string': [
    //   'warn',
    //   {
    //     markupOnly: true,
    //     ignoreAttribute: [
    //       'as',
    //       'role',
    //       'data-testid',
    //       'to',
    //       'target',
    //       'justify',
    //       'align',
    //       'border',
    //       'direction',
    //       'gap',
    //     ],
    //   },
    // ],
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 130,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error',
    // Checks effect dependencies
    'newline-before-return': 'error',
  },

  overrides: [
    {
      files: '*.stories.tsx',
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: 'global.d.ts',
      rules: {
        '@typescript-eslint/naming-convention': [
          'off',
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
          },
        ],
      },
    },
  ],
};
