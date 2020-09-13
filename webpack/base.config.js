const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1000,
                        },
                    },
                    "image-webpack-loader",
                ],
            },
            {
                test: /\.json$/,
                loader: "json-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".png"],
        alias: {
            src: path.join(process.cwd(), "src"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Ashoka Wardhan | Resume",
            meta: {
                viewport: "width=device-width, initial-scale=1",
                description: "Ashoka Chandra Wardhan Frontend Developer Resume",
            },
            templateContent: `
                <html>
                    <body>
                        <div id="root"></div>
                    </body>
                </html>
            `,
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css",
        }),
    ],
};
