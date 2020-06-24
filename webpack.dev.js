const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

const SassLintPlugin = require('sass-lint-webpack')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new SassLintPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader', // creates style nodes from JS strings
				'css-loader', // translates CSS into CommonJS
				'sass-loader' // compiles Sass to CSS, using Node Sass by default
			]
		}]
	}
})