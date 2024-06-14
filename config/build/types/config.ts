export interface IBuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
  styles: string;
}

export type BuildModeType = 'production' | 'development';

export interface IBuildOptions {
  paths: IBuildPaths;
  mode: BuildModeType;
  port: number;
  isDev: boolean;
  apiUrl: string;
}

export interface IBuildEnv {
  port: number;
  mode: BuildModeType;
  apiUrl?: string;
}
