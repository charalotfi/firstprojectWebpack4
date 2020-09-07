const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }

        ]
    },

    plugins: [

        new htmlWebpackPlugin({
            hash: true,
            inject: "body",
            template: "./src/index.html",
            filename: "index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }

        })

    ]

}