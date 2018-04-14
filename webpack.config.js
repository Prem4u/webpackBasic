const path= require('path');
const CleanWebpack= require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
		entry: "./src/index.js",
		mode: "development",                               // used for development mode
		output :{
            filename: "app.js",
		    path: path.resolve(__dirname,"dist"),          // need to an absolute path
		},
		// For dev server file will be server from memory always 
	    devServer: {
			  compress: true,                              // file served as gzip format
			  port: 9000,                                  // port of deploy
			  stats: "errors-only"                         // only show errors
			},
		module: {
			rules: [{
				        test : /\.css$/,                    //regular expression 
				        use : ['style-loader','css-loader'] //older version loader
			         },
			         {
					     test : /\.(jpg|png|svg)$/,
					     use : ['file-loader']
				         },
				     {
						 test : /\.xml$/,
						 use : ['xml-loader']
					  }    
					]
		},	
        plugins: [
    	    new CleanWebpack(["dist"]),                       // directory will be deleted by each build
        	new HtmlWebpackPlugin({
        		title :"Basic Of Webpack",                    //this can be read in template by <%= htmlWebpackPlugin.options.title %>
        		template: "src/index.html"
        	})	
            ]
}