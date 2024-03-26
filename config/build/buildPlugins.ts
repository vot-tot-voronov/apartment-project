import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { IBuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl }: IBuildOptions): Array<WebpackPluginInstance> {
  const isProd = !isDev;

  const plugins = [
    new HtmlWebpackPlugin({
      title: 'Apartment project',
      template: paths.html,
    }),
    new ProgressPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          syntactic: true,
          semantic: true,
        },
        mode: 'write-references',
      },
    }),
    new DefinePlugin({ __IS_DEV__: JSON.stringify(isDev), __API_URL__: JSON.stringify(apiUrl) }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    );
  }

  return [...plugins];
}
