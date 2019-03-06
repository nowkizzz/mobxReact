const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // entry: ["babel-polyfill", path.resolve(__dirname, 'src/index.js')],
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            // '@': resolve('src')
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: resolve('src'),
                exclude: [/node_modules/, resolve('src/utils')],
                options: {
                    fix: false,
                    emitWarning: true
                }
            },
            // {
            //     test: /.jsx$/,
            //     loader: 'babel-loader',
            //     exclude: /node_modules/
            // }, 
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                // query: {
                //     plugins: ['transform-runtime'],
                //     presets: ['react', 'es2015']
                // }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    // 'file-loader'
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),

    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
}