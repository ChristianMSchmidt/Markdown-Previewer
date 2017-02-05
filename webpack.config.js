"use strict";
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/client.js",
    output: {
        filename: "bundle.js",
        path: "public"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test:/\.scss$/,
                loader: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader!sass-loader"
                })
            }
            ]
    },
    plugins:[
        new ExtractTextPlugin({
          filename: "bundle.css",
          disable: false,
          allChunks: true
        }),
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          mangle: true,
          comments: false,
          sourcemap: false,
          beautify: false,
          dead_code: true
        })
    ]
};