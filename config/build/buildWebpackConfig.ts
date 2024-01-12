import webpack from "webpack";
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {

    const { mode, pathes, isDev } = options;

    return {
        mode,
        entry: pathes.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: pathes.build,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
    };
}