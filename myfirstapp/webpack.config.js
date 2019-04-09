const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require ('path');

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