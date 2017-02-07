"use strict";
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// To get externals for creating the backend-bundle (from: http://jlongster.com/Backend-Apps-with-Webpack--Part-I)
const fs = require("fs");
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = function (env) {
    const isProduction = env.production === true;
    const _modules = {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: [ "es2015", "react" ] }
            },
            {
                test:/\.scss$/,
                loader: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader", "sass-loader"]
                })
            }
            ]
    };
    const _plugins = [
        new ExtractTextPlugin({
                filename: "bundle.css",
                disable: false,
                allChunks: true
            })
    ];
    
    return [ 
        {
            // Bundle up the Frontend
            entry: "./src/client.js",
            output: {
                filename: "bundle.js",
                path: "public"
            },
            module: _modules,
            plugins: _plugins
        },
        {
            // Bundle up the Backend
            // No need to use the scss stuff here so we can omit the plugins (only extract css) and the scss-rule
            entry: "./src/server.js",
            output: {
                filename: "server_bundle.js",
                path: "public"
            },
            target: "node",
            externals: nodeModules,
            module: { rules: [ _modules.rules[0] ] }
        }
    ];
};