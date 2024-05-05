import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: false,
  forceExit: true,
  detectOpenHandles: false,
  preset: 'ts-jest',
  roots: ['<rootDir>/puppeteer'],
  runner: 'groups',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/puppeteer/$1',
  },
  transform: {
    '^.+\\.[t]s$': [
      'ts-jest',
      {
        isolatedModules: true,
        diagnostics: false,
        tsconfig: './tsconfig.json',
      },
    ],
  },
  maxWorkers: '95%',
  workerIdleMemoryLimit: '300MB',
  collectCoverage: false,
  coverageReporters: ['text-summary', 'lcov'],
  coverageThreshold: {
    global: {
      lines: 1,
    },
  },
  collectCoverageFrom: ['!**/*.test.ts'],
  coverageProvider: 'v8',
};

export default config;
