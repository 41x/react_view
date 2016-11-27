/**
 * Created by alxnam on 27.11.16.
 */
module.exports = {
    entry: './js/main.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel',
                query:{
                    presets:['es2015', 'react']
                }
            }
        ]
    }
};