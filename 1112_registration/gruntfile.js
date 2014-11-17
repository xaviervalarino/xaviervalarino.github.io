module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				files: {
					'accounts.css' : 'accounts.scss'
				}
			}
		},
		watch: {
			options: {
		      livereload: true,
		    },
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}