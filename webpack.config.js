const path= require('path');
const CleanWebpack= require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports= {
		entry: "./src/index.js",
		mode: "development",                               // used for development mode
		output :{
            filename: "app.js",
		    path: path.resolve(__dirname,"dist"),          // need to an absolute path
		    publicPath: "dist"
		},
		// For dev server file will be server from memory always 
	    devServer: {
	    	  contentBase: path.join(__dirname, "dist"),
			  compress: true,                              // file served as gzip format
			  port: 9000,                                  // port of deploy
			  stats: "errors-only"                         // only show errors
			},
		module: {
			rules: [{
				        test : /\.css$/,                    //regular expression 
				        use :  ExtractTextPlugin.extract({
				        	      fallback: "style-loader",
				        	       use: "css-loader",
				        	       publicPath: "/dist"
				        	     }) //older version loader
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
    	   // new CleanWebpack(["dist"]),                       // directory will be deleted by each build
        	new ExtractTextPlugin({
        		    filename: "bundle.css",
        		    disable: false,
        		    allChunks: true
        		  }),
        	new HtmlWebpackPlugin({
        		title :"Basic Of Webpack",                    //this can be read in template by <%= htmlWebpackPlugin.options.title %>
        		template: "src/index.html",
        		hash: true
        	})	
            ]
}