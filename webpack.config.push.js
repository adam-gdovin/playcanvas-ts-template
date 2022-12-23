const path = require("path");
const glob = require("glob");
const WebpackShellPluginNext  = require("webpack-shell-plugin-next");

module.exports = {
	entry: {
		bundle: {
			import:	glob.sync("./src/**/*.ts").reduce(function(obj, el){
				if(!el.startsWith("./src/loading/"))
					obj.push(el);
				return obj
				},[]),
		},
		loading: {
			import: "./src/loading/loading_screen.ts",
		},
	},
	devtool: "source-map",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
	},
	/*optimization: {
		runtimeChunk: "single"
	},*/
	watch: true,
	plugins: [
		new WebpackShellPluginNext({
			onAfterDone: {
				scripts: ["npm run push"]
			}
		})
	],
};