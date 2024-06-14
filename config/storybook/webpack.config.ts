import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';

import { buildScssLoader } from '../build/loaders/buildScssLoader';
import { IBuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
  const paths: IBuildPaths = {
    html: '',
    entry: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    styles: path.resolve(__dirname, '..', '..', 'src', 'app', 'styles'),
  };

  config.resolve?.extensions?.push('.tsx', '.ts', '.js', '.scss');
  config.resolve?.modules?.push(paths.src);
  config!.resolve!.alias = {
    '@': paths.src,
    '@styles': paths.styles,
  };

  // @ts-ignore
  config!.module!.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config?.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module?.rules?.push(buildScssLoader(true));

  config.plugins?.push(new DefinePlugin({ __IS_DEV__: JSON.stringify(true), __API_URL__: JSON.stringify('') }));

  return config;
};
