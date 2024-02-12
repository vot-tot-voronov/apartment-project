import { BuildOptions } from "./types/config";
import { RuleSetRule } from "webpack";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): Array<RuleSetRule> {
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  return [codeBabelLoader, tsxCodeBabelLoader];
}
