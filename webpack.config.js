const path = require('path');

module.exports = {
    entry : {
        app: './index.js'
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'index.bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js?$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    preset : ['env']
                }
            }
        ]
    }
}