const path=require('path');

module.exports={
    entry:"./dist/js/main.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"./dist")
    },
    mode:"none",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader',{
                    loader:'sass-loader',
                    options:{
                      implementation:require("sass")
                    }
                }]
            }
        ]
    }
}