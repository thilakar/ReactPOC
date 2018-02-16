var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'bootstrap/dist/css/bootstrap.css',
    //'jquery/dist/jquery.min.js',
    './client/asserts/css/style.css',
    './client/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {           
            loader: 'babel-loader',
            options: {
              presets: ['es2015','react']
            }
          }
        ],
        exclude: /node_modules/        
      },
    //   {
    //     test: /\.scss$/,
    //     use: ExtractTextPlugin.extract({
    //       use: ["css-loader", "sass-loader"],
    //       fallback: "style-loader"
    //     })
    //   },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader"],
          fallback: "style-loader"
        })
      },
      {
        test: /\.woff$/,
        use: [{ loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]" }]
        //  use: [{
        //   loader:"file-loader",
        //   options: {
        //     name: '[name].[ext]',
        //     outputPath:'images/',
        //     publicPath:'images/'
        //   }
        // }]
      },
      {
        test: /\.(woff2|otf)$/,
        use: [{ loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]" }]
        // use: [{
        //   loader:"file-loader",
        //   options: {
        //     name: '[name].[ext]',
        //     outputPath:'images/',
        //     publicPath:'images/'
        //   }
        // }]
      },
      {
        test: /\.(eot|ttf|svg|gif|png|jpg|jpeg)$/,
        use: [{
          loader:"file-loader",
          options: {
            name: '[name].[ext]',
            outputPath:'images/',
            publicPath:'images/'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery"}),
    new ExtractTextPlugin("bundle.css"),
  ]  
}



