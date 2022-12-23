const path = require('path');
const glob = require('glob');

module.exports = {
	entry: glob.sync('./src/**/*.ts').reduce(function(obj, el){
		obj.push(el);
		return obj
	},[]),
	devtool: "source-map",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'typings-for-css-modules-loader',
						options: {
							modules: true,
							namedExport: true
						}
					}
				]
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: "C:\\Users\\adamg\\Desktop\\miniweb\\htdocs\\Doors\\files\\assets\\112132839\\1",
	},
	watch: true
};