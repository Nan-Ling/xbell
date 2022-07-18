import type { TsParserConfig, JscConfig } from '@swc/core';

export const tsParserConfig: TsParserConfig = {
  syntax: 'typescript',
  decorators: true,
  tsx: true,
};

export const jscConfig: JscConfig = {
  parser: tsParserConfig,
  transform: {
    decoratorMetadata: true,
    legacyDecorator: true,
  },
  target: 'es2020',
};