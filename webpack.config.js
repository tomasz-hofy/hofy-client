const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const hash = require('string-hash');


const dist = path.resolve(__dirname, 'dist');
const isProd = process.env.NODE_ENV === 'production';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const babelOptions = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
    ],
    sourceType: 'unambiguous',
};

if (!isProd) {
    babelOptions.plugins.push(require.resolve('react-refresh/babel'));
}

const commonConfig = {
    entry: { app: './src/app/index.tsx' },
    context: __dirname,
    cache: true,
    output: {
        // Make sure to use [name] or [id] in output.filename
        // when using multiple entry points
        filename: isProd ? '[name].bundle.[hash].js' : '[name].bundle.js',
        path: dist,
        publicPath: '/',
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        hot: true,
        openPage: '',
        contentBase: '.',
        port: 4000,
        historyApiFallback: true, // to make our SPA works after a full reload, so that it serves 'index.html' when 404 response
        proxy: {
            '/api': 'http://localhost:5000',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions,
                },
            },
            {
                test: /\.ttf$|\.eot$|\.mp3|\.woff2?$/,
                loader: 'file-loader',
            },
            {
                test: /\.png$|\.jpg$|\.ico/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            useRelativePath: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions,
                    },
                    ({ resource }) => ({
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true,
                            svgo: {
                                plugins: [
                                    { prefixIds: { prefix: () => hash(path.relative('/', resource)) } },
                                    { removeViewBox: false },
                                ],
                            },
                        },
                    }),
                ],
            },
        ],
    },
};

const prodConfig = {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/app/index.ejs',
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
};

const devConfig = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/app/index.ejs',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
};

module.exports = merge(commonConfig, isProd ? prodConfig : devConfig);
