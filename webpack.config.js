module.exports = {
	entry:"./app/src/app.js",
	module: {
		loaders:[
		{
			test:/\.jsx?$/,
			exclude:/(node_modules|bower_components)/,
			loader: 'babel-loader',
			query:{
				presets:['react', 'es2015', 'stage-0'],
			}
		}]
	},
	output: {
		path:__dirname + "/app/dist/js",
		filename:"script.min.js"
	}
};

