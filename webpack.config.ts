import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, BuildMode, IBuildPaths } from './config/build/types/config';

const config = (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    styles: path.resolve(__dirname, 'src', 'app', 'styles'),
  };

  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  return buildWebpackConfig({
    paths,
    mode,
    isDev,
    port: PORT,
  });
};

export default config;
