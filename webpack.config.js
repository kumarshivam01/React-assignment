const path = require('path')
module.exports={
    mode:"production", //development
    entry:'./src/index.js',
    output:{
        path:path.resolve(".","build"),
        filename:"bundle.js"
    },
    module: {
        rules: [
          { test: /\.css$/, use: ["style-loader","css-loader"] },
          {test: /\.(png|jpg|gif)$/i,use: [{loader: 'url-loader',options: {limit: 5000,},},],}, // limit:-long url
        ],
      },
}