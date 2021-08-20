const path = require("path");
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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                },
            // {
            //     test:/\.(svg|png|jpe?g|gif)$/i,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "[name].[hash].[ext]",
            //             outputPath: "img/",
            //         }
            //     }
            // }
        ],
    },

}


