import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { IBuildOptions } from './types/config';

export function buildDevServer({ port }: IBuildOptions): DevServerConfiguration {
  return {
    port,
    hot: true,
    historyApiFallback: true,
    open: true,
  };
}
