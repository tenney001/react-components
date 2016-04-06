var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('./path');

module.exports = {
	// entry:{
	// 	entry1:'./demo/js'
	// },
	entry:[
		// 'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		// 'webpack/hot/only-dev-server',
		'./examples/js'
	],
	output:{
		path:__dirname,
		filename:'index.js'
	},
	resolve:{
		extensions:['','.js','jsx']
	},
	module:{
		loaders:[
			{
				test: /\.(js|jsx|es2015)$/,
				exclude: /node_modules/,
      			loaders: ['babel']
			}
		]
	},
	plugins:[commonsPlugin]
};