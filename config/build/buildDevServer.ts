import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
  return {
    port,
    hot: true,
    historyApiFallback: true,
    open: true,
  };
}
