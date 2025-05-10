export default {
  displayName: 'petlyhood-mobile',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/apps/petlyhood-mobile',
  transform: {
    // Usamos jest-preset-angular para transformar archivos TS, MJS, JS, y HTML.
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: [
    // Transformamos ciertas dependencias modernas.
    '<rootDir>/node_modules/(?!(@ionic/core|@ionic/angular|@stencil/core|ionicons|.*.mjs$))',
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  resolver: '@nx/jest/plugins/resolver', // Resolver mejorado para monorepos de Nx.
};
