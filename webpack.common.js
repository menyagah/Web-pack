const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
    }
    )],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

}


