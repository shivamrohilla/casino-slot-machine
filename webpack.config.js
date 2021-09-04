const path = require('path');
module.exports = {
    mode: 'development',
    entry : __dirname+ '/script.js' , 
    output : {

        filename : "main.js" , 
        path : path.resolve(__dirname , "dist")
    } ,
    module: {

        rules : [

            {
                test: /\.css$/,
                use :['style-loader' , 'css-loader']

                // test :  /\.scss$/,
                // use : ['style-loader' , 'css-loader' , 'sass-loader']
            }
        ]

    } , 
    devServer: {
        static:{
            directory : __dirname
        },
        port: 3000,
        historyApiFallback: {
          index: __dirname+'/index.html'
        }
      }

}