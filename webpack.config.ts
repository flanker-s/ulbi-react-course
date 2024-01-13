import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPathes } from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {

    const pathes: BuildPathes = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        pathes,
        isDev,
        port: PORT
    });

    return config;
}

