module.exports = function(grunt){
	var isCompress = grunt.option('isCompress') || false 
	console.log(isCompress)
	require('jit-grunt')(grunt);
	grunt.initConfig({
		less : {
			development : {
				options : {
					compress : isCompress 
					,yuicompress : true
					,optimization : 2
				}
				,files : [{
					expand : true
					,cwd : 'less'
					,src : ['*.less']
					,dest : 'css/'
					,ext : '.css'
				}]	
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
