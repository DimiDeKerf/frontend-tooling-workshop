const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const source = path.resolve(__dirname, 'src');
const destination = path.resolve(__dirname, 'dist');
const appDirectory = path.resolve(source, 'app');

module.exports = {
    context: source, // Define the starting path
    entry: [
        './index.ts',
        './style/styles.css'
    ],
    output: {
        filename: 'bundle.js',
        path: destination
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [path.resolve(__dirname, 'src', 'index.html')]                
            }
        ]
    },
    plugins: [
        // Generate HTML file with links to the bundle and styles
        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        // Extract css from the bundle
        new ExtractTextPlugin('styles.css'),

        // Necessary for Angular
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)((esm(\\|\/)src|src)(\\|\/)linker|@angular)/,
            path.resolve(__dirname, './src')
        )
    ],

    // Configure source maps
    devtool: 'source-map'
};
