const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        'js/app': [
            './src/App.tsx'
        ]
    },
    output: {
        path: path.resolve(__dirname,'dist/'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new ForkTsCheckerWebpackPlugin({
            logger: {
                silent: true
            }
        })
    ]
}