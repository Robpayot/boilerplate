const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app/js/app.js',
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'new robin\'s project',
			template: 'app/index.html'
		})
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	module: {
		rules: [{
      enforce: "pre",
      test: /\.scss$/,
      loader: "import-glob-loader"
    }, {
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				'file-loader'
			]
		}, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':src', ':xlink:href']
        }
      }
    }]
	}
}