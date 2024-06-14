import { ResolveOptions } from 'webpack';

import { IBuildOptions } from './types/config';

export function buildResolvers({ paths }: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    preferAbsolute: true,
    alias: {
      '@': paths.src,
      '@styles': paths.styles,
    },
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
  };
}
