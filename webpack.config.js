const path = require('path');
const glob = require('glob');

module.exports = {
	entry: glob.sync('./src/**/*.ts').reduce(function(obj, el){
			if(!el.startsWith("./src/loading/"))
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
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	watch: true,
};