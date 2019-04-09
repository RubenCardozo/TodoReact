const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports= {
    entry: './src/index.js',
    output:{
        path:__dirname + '/build',
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]

}