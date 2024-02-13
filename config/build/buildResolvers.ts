import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    alias: {
      '@': paths.src,
    },
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
  };
}
