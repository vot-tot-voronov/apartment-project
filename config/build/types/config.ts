export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
  paths: BuildPaths;
  mode: BuildMode;
  port: number;
  isDev: boolean;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
}
