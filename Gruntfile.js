module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		replace: {
			simple: {
				options: {
					patterns: [
						{
							match: 'load',
							replacement: '<%= grunt.file.read("src/javascript/defr.load.simple.js") %>'
						}
					]
				},
				files: [
					{expand: true, flatten: true, src: ['src/javascript/defr.main.js'], dest: 'lib/simple'}
				]
			},
			localstorage: {
				options: {
					patterns: [
						{
							match: 'load',
							replacement: '<%= grunt.file.read("src/javascript/defr.load.localstorage.js") %>'
						}
					]
				},
				files: [
					{expand: true, flatten: true, src: ['src/javascript/defr.main.js'], dest: 'lib/localstorage'}
				]
			},
			defrSimple: {
				options: {
					patterns: [
						{
							match: 'description',
							replacement: '<%= grunt.file.read("src/html/simple.html") %>'
						},
						{
							match: 'defr',
							replacement: 'defr.simple.min.js'
						}
					]
				},
				files: [
					{expand: true, flatten: true, src: ['src/html/index.html'], dest: 'lib/simple'}
				]
			},
			defrLocalstorage: {
				options: {
					patterns: [
						{
							match: 'description',
							replacement: '<%= grunt.file.read("src/html/localstorage.html") %>'
						},
						{
							match: 'defr',
							replacement: 'defr.localstorage.min.js'
						}
					]
				},
				files: [
					{expand: true, flatten: true, src: ['src/html/index.html'], dest: 'lib/localstorage'}
				]
			}
		},
		rename: {
			main: {
				files: [
					{src: ['lib/simple/defr.main.js'], dest: 'lib/defr.simple.js'},
					{src: ['lib/simple/index.html'], dest: 'example/index-simple.html'},
					{src: ['lib/localstorage/defr.main.js'], dest: 'lib/defr.localstorage.js'},
					{src: ['lib/localstorage/index.html'], dest: 'example/index-localstorage.html'}
				]
			}
		},
		clean: ['lib/simple', 'lib/localstorage'],
		uglify : {
			simple : {
				src : 'lib/defr.simple.js',
				dest : 'lib/defr.simple.min.js'
			},
			localstorage : {
				src : 'lib/defr.localstorage.js',
				dest : 'lib/defr.localstorage.min.js'
			}
		},
		watch : {
			javascript : {
				files : ['src/*/*'],
				tasks : ['default'],
				options : {
					spawn : false
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-contrib-rename');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['replace:simple', 'replace:localstorage', 'uglify', 'replace:defrSimple', 'replace:defrLocalstorage', 'rename', 'clean']);
}