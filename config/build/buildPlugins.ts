import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: BuildOptions): Array<WebpackPluginInstance> {
  return [
    new HtmlWebpackPlugin({
      title: "Apartment project",
      template: paths.html,
    }),
    new ProgressPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          syntactic: true,
          semantic: true,
        },
        mode: "write-references",
      },
    }),
  ];
}
