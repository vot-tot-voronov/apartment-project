import { RuleSetRule } from "webpack";

export function buildLoaders(): Array<RuleSetRule> {
  const babelLoader = {
    test: /\.(js|tsx|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  return [babelLoader];
}
