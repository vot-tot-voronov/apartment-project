export interface IBuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
}

export type BuildMode = 'production' | 'development';

export interface IBuildOptions {
  paths: IBuildPaths;
  mode: BuildMode;
  port: number;
  isDev: boolean;
}

export interface IBuildEnv {
  port: number;
  mode: BuildMode;
}
