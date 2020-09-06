const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        rules: []
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