var path = require('path');
var webpack = require('webpack');
var enabledSyntaxes = require( './src/ace-syntaxes' );

var entries = {
  main: [ 
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/index'
  ],
  styles: './src/app.less',
  languages: enabledSyntaxes.map( v => 'react-codemirror/node_modules/codemirror/mode/' + v +'/' + v ),
};

module.exports = {
  devtool: 'eval',
  entry: entries,
  output: {
    path: path.join(__dirname, 'public', 'static'),
    filename: '[name].bundle.[ext]',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/),
    new webpack.HotModuleReplacementPlugin(),
  ],
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jsx$/,
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
