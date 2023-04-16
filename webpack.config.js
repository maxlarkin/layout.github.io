const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'docs'),
        clean: true
    },
    devServer: {
        static: path.resolve(__dirname, 'docs'),
        hot: true
    },
    optimization: {
        usedExports: true,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'template.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};
