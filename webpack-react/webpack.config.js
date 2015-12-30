module.exports = {
	// where the root component is
	entry: "./src/app/app.js",
	output: {
		filename: "public/js/bundle.js"
	},
	//what to actually do
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.jsx?$/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			}
		]
	},
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};

