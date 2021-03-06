var path = require('path')
var node_modules = path.resolve(__dirname, 'node_modules')
var pathToReact  = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports   = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'app/avatar.jsx')
    ],
    resolve: {
        alias: {
            'react': pathToReact
        }
    },
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }],
        noParse: [pathToReact]
    }
}
