import { RuleSetRule } from 'webpack';

import { IBuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildScssLoader } from './loaders/buildScssLoader';

export function buildLoaders(options: IBuildOptions): Array<RuleSetRule> {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const scssLoader = buildScssLoader(isDev);

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  return [svgLoader, codeBabelLoader, tsxCodeBabelLoader, scssLoader, imageLoader];
}
