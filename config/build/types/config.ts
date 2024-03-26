export interface IBuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
  styles: string;
}

export type BuildMode = 'production' | 'development';

export interface IBuildOptions {
  paths: IBuildPaths;
  mode: BuildMode;
  port: number;
  isDev: boolean;
  apiUrl: string;
}

export interface IBuildEnv {
  port: number;
  mode: BuildMode;
  apiUrl?: string;
}
