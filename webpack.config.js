//const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
    },
    target: "node",
    devServer: {
        port: "9500",
        contentBase: ["./public"],
        open: true,
    },
    resolve: {
        extensions: [".json", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }  
}