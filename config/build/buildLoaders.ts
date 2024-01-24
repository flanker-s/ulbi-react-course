import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates embeded or separeted css
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}