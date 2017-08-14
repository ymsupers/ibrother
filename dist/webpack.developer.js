/**
 * Created by mr.yang on 2017/8/13.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TemplateHtmlWebpcak = require('html-webpack-template');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const WebpackCommonJs = require('./webpack.common');
const Merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = Merge(WebpackCommonJs, {

    devtool: 'cheap-module-source-map',

    output: {
        path: path.join(__dirname, '../dist/assets/'),
        publicPath: '',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },

    devServer: {
        port: 8008,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        contentBase: path.resolve(__dirname, 'assets/')
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: TemplateHtmlWebpcak,
            appMountId: 'app',
            meta: [
                {
                    name: 'description',
                    content: 'A better default template for html-webpack-plugin.'
                }
            ],
            minify: {
                collapseinlinetagwhitespace: true,
                collapseWhitespace: true,
                includeautogeneratedtags: true,
                minifycss: true,
                minifyjs: true,
                minifyurls: true,
                useshortdoctype: true
            },
            hash: true,
            mobile: true,
            lang: 'en-US',
            link: [
                'https://fonts.googleapis.com/css?family=Roboto'
            ],
            title: 'ibrother博客网站(http://www.ibrother.com)',
            window: {
                env: {
                    apiHost: 'https://127.0.0.1/api/v1'
                }
            }
        }),
        new CleanWebpackPlugin(['./assets']),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('developer')
            }
        }),
        new ExtractTextPlugin('css/[name].min.css')
    ]

});
