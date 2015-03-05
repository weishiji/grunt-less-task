module.exports = function(grunt){
	var isCompress = grunt.option('isCompress') || false 
	console.log(isCompress)
	require('jit-grunt')(grunt);
	grunt.initConfig({
		less : {
			development : {
				options : {
					compress : true 
					,yuicompress : true
					,optimization : 2
				}
				,files : {
					'css/main.css' : 'less/main.less'
				}
			}
		}
		,watch : {
			styles : {
				files : ['less/**/*.less']
				,tasks : ['less']
				,options : {
					nospawn : true
				}
			}
		}
	});

	grunt.registerTask('default',['less','watch'])
	grunt.registerTask('nowatch',['less'])
}
