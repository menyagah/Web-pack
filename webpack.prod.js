const common = require("./webpack.common");
const merge = require("webpack-merge")
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
});


