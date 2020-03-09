const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'Webpack Boilerplate';

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        vendor: [
            'lodash'
        ],
        bundle: path.join(dirApp, 'index')
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),
        new HtmlWebpackPlugin({
          data: {
            title:'Home'
          },
          template: path.join(__dirname, 'index.ejs'), // Load a custom template
          inject: 'body', // Inject all scripts into the body
          filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
          data: {
            title:'About'
          },
          template: path.join(__dirname, '/app/views/pages/about.ejs'), // Load a custom template
          inject: 'body', // Inject all scripts into the body
          filename: 'about.html'
        })
    ],
    module: {
        rules: [
            // HTML
            {
              test: /\.html$/, // tells webpack to use this loader for all ".html" files
              loader: 'html-loader'
            },
            // EJS
            { test: /\.ejs$/, loader: 'ejs-loader' },
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                ]
            },

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV,
                            sassOptions: {
                                includePaths: [dirAssets]
                            }
                        }
                    }
                ]
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
