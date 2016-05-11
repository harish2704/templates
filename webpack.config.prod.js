var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var enabledSyntaxes = require( './src/ace-syntaxes' );

var entries = {
  main: './src/index',
  styles: './src/app.less',
  // languages: enabledSyntaxes.map( v => 'brace/mode/' + v )
  languages: enabledSyntaxes.map( v => 'react-codemirror/node_modules/codemirror/mode/' + v +'/' + v ),
};

module.exports = {
  // devtool: 'eval',
  devtool: 'source-map',
  entry: entries,
  output: {
    path: path.join(__dirname, 'public', 'static'),
		filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.IgnorePlugin(/^(buffertools)$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: true
      }
    }),
    new ExtractTextPlugin('[name].bundle.css')

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
          'babel-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract( 'css-loader?sourceMap!less-loader?sourceMap' )
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
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-router': {
      root: 'ReactRouter',
      commonjs2: 'react-router',
      commonjs: 'react-router',
      amd: 'react-router'
    }
  },
};
