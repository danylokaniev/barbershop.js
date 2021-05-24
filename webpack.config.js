const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
	entry: [
		'./src/index.js',
		'./src/main.css'
	],
	output: {
		path: `${__dirname}/dist`,
		filename: 'index_bundle.js'
	},
	mode: 'development',
	output: { filename: './main.js' },
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		watchContentBase: true,
		progress: true,
		hot: true
	},
	devtool: 'inline-source-map',
	plugins: [
		new MiniCssExtractPlugin(
			'css/index.css',
			{
				filename: 'css/index.css',
				chunkFilename: '[id].css',
			}
		), new Dotenv()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: false,
						presets: [
							'@babel/preset-react',
							[
								'@babel/preset-env',
								{ targets: { esmodules: true } }
							]
						],
						plugins: [
							[
								'@babel/plugin-transform-runtime',
								{ regenerator: true }
							]
						]
					}
				}
			},
			{
				test: /\.m\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: '/build/css/', },
					},
					{
						loader: 'css-loader',
						options: { modules: { localIdentName: '[path][name]__[local]', } }
					}
				]
			},
			{
				test: /\.css$/, // .css
				exclude: /\.m\.css$/, // .m.css
				// todo : fix bundle all styes into one file
				use: [
				// {
				// 	loader: MiniCssExtractPlugin.loader,
				// 	options: {
				// 		publicPath: '/build/css/',
				// 	},
				// },
					'style-loader',
					'css-loader',
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'url-loader'
			}
		]
	},
	resolve: { extensions: ['*', '.js', '.jsx'], },
}
