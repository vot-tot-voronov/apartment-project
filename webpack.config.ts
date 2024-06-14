import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildEnv, BuildModeType, IBuildPaths } from './config/build/types/config';

const config = (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
    styles: path.resolve(__dirname, 'src', 'app', 'styles'),
  };

  const mode: BuildModeType = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  const API_URL = env.apiUrl || 'http://localhost:8000';

  return buildWebpackConfig({
    paths,
    mode,
    isDev,
    port: PORT,
    apiUrl: API_URL,
  });
};

export default config;
