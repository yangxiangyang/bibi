



module.exports = function(grunt){


	var path = require('path');

	var matchdep = require('matchdep');


	// Load All Grunt-Plugin Tasks
	matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);


	// Initialize Config
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Clean Document Directory
		clean: {
			bibi_js: [
				'bib/i/res/scripts/bibi.js'
			],
			bibi_extension_cplus_js: [
				'bib/i/extensions/cplus/cplus.js'
			],
			bibi_extension_unzipper_js: [
				'bib/i/extensions/unzipper/unzipper.js'
			],
			bibi_extension_epubcfi_js: [
				'bib/i/extensions/epubcfi/epubcfi.js'
			],
			bibi_extension_jatex_js: [
				'bib/i/extensions/jatex/jatex.js'
			],
			bibi_extension_overreflow_js: [
				'bib/i/extensions/overreflow/overreflow.js'
			],
			pipi_js: [
				'bib/i.js'
			],
			bibi_css: [
				'bib/i/res/styles/bibi.css'
			],
			pipi_css: [
				'bib/i.css'
			]
		},

		// Concat Scripts
		concat: {
			bibi_js: {
				src: [
					'dev-bib/i/res/scripts/_banner.js',
					'dev-bib/i/res/scripts/_lib/npo.src.js',
					'dev-bib/i/res/scripts/_lib/easing.js',
					'dev-bib/i/res/scripts/_lib/sML.js',
					'dev-bib/i/res/scripts/bibi.core.js'
				],
				dest: 'bib/i/res/scripts/bibi.js'
			},
			bibi_extension_cplus_js: {
				src: [
					'dev-bib/i/extensions/cplus/_banner.js',
					'dev-bib/i/extensions/cplus/cplus.viewmenu.js',
					'dev-bib/i/extensions/cplus/cplus.fullscreen.js',
					'dev-bib/i/extensions/cplus/cplus.arrows.js',
					'dev-bib/i/extensions/cplus/cplus.keys.js',
					'dev-bib/i/extensions/cplus/cplus.messages.js'
				],
				dest: 'bib/i/extensions/cplus/cplus.js'
			},
			bibi_extension_unzipper_js: {
				src: [
					'dev-bib/i/extensions/unzipper/_banner.js',
					'dev-bib/i/extensions/unzipper/unzipper.js',
					'dev-bib/i/extensions/unzipper/_lib/jszip.min.js',
					'dev-bib/i/extensions/unzipper/_lib/base64.js'
				],
				dest: 'bib/i/extensions/unzipper/unzipper.js'
			},
			bibi_extension_epubcfi_js: {
				src: [
					'dev-bib/i/extensions/epubcfi/epubcfi.js'
				],
				dest: 'bib/i/extensions/epubcfi/epubcfi.js'
			},
			bibi_extension_jatex_js: {
				src: [
					'dev-bib/i/extensions/jatex/jatex.js'
				],
				dest: 'bib/i/extensions/jatex/jatex.js'
			},
			bibi_extension_overreflow_js: {
				src: [
					'dev-bib/i/extensions/overreflow/overreflow.js'
				],
				dest: 'bib/i/extensions/overreflow/overreflow.js'
			},
			pipi_js: {
				src: [
					'dev-bib/i.js'
				],
				dest: 'bib/i.js'
			}
		},

		// Minify Scripts
		uglify: {
			bibi_js: {
				options: {
					preserveComments: 'some',
					banner: ''
				},
				src: [
					'<%= concat.bibi_js.dest%>'
				],
				dest: '<%= concat.bibi_js.dest%>'
			},
			bibi_extension_cplus_js: {
				options: {
					preserveComments: 'some',
					banner: ''
				},
				src: [
					'<%= concat.bibi_extension_cplus_js.dest%>'
				],
				dest: '<%= concat.bibi_extension_cplus_js.dest%>'
			},
			bibi_extension_unzipper_js: {
				options: {
					preserveComments: 'some',
					banner: ''
				},
				src: [
					'<%= concat.bibi_extension_unzipper_js.dest%>'
				],
				dest: '<%= concat.bibi_extension_unzipper_js.dest%>'
			},
			bibi_extension_epubcfi_js: {
				options: {
					preserveComments: 'some',
					banner: ''
				},
				src: [
					'<%= concat.bibi_extension_epubcfi_js.dest%>'
				],
				dest: '<%= concat.bibi_extension_epubcfi_js.dest%>'
			},
			bibi_extension_jatex_js: {
				options: {
					preserveComments: 'some',
					banner: ''
				},
				src: [
					'<%= concat.bibi_extension_jatex_js.dest%>'
				],
				dest: '<%= concat.bibi_extension_jatex_js.dest%>'
			},
			bibi_extension_overreflow_js: {
				options: {
					preserveComments: 'some',
					banner: ''
				},
				src: [
					'<%= concat.bibi_extension_overreflow_js.dest%>'
				],
				dest: '<%= concat.bibi_extension_overreflow_js.dest%>'
			},
			pipi_js: {
				options: {
					preserveComments: 'some',
					banner: ''
				},
				src: [
					'<%= concat.pipi_js.dest%>'
				],
				dest: '<%= concat.pipi_js.dest%>'
			}
		},

		// Compile Compass/SCSS to CSS
		compass: {
			dev: {
				options: {
					bundleExec: true,
					config: 'config.rb',
					environment: 'development'
				}
			},
			prod: {
				options: {
					bundleExec: true,
					config: 'config.rb',
					environment: 'production'
				}
			}
		},

		// Combine Media Queries
		cmq: {
			options: {
				log: true
			},
			bibi_css: {
				files: {
					'bib/i/res/styles/': [
						'bib/i/res/styles/bibi.css'
					]
				}
			},
			pipi_css: {
				files: {
					'bib/': [
						'bib/i.css'
					]
				}
			}
		},

		// Minify StyleSheets
		cssmin: {
			bibi_css: {
				expand: true,
				cwd: 'bib/i/res/styles/',
				src: [
					'bibi.css'
				],
				dest: 'bib/i/res/styles/',
				ext: '.css'
			},
			pipi_css: {
				expand: true,
				cwd: 'bib/',
				src: [
					'i.css'
				],
				dest: 'bib/',
				ext: '.css'
			}
		},

		// Watch Some Files Status
		watch: {
			bibi_js: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/i/res/scripts/_lib/*.js',
					'dev-bib/i/res/scripts/*.js'
				],
				tasks: [
					'build_bibi_js',
					''
				]
			},
			bibi_extension_cplus_js: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/extensions/cplus/*.js'
				],
				tasks: [
					'build_bibi_extension_cplus_js',
					''
				]
			},
			bibi_extension_unzipper_js: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/extensions/unzipper/*.js'
				],
				tasks: [
					'build_bibi_extension_unzipper_js',
					''
				]
			},
			bibi_extension_epubcfi_js: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/extensions/epubcfi/*.js'
				],
				tasks: [
					'build_bibi_extension_epubcfi_js',
					''
				]
			},
			bibi_extension_jatex_js: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/extensions/jatex/*.js'
				],
				tasks: [
					'build_bibi_extension_jatex_js',
					''
				]
			},
			bibi_extension_overreflow_js: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/extensions/overreflow/*.js'
				],
				tasks: [
					'build_bibi_extension_overreflow_js',
					''
				]
			},
			pipi_js: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/i.js'
				],
				tasks: [
					'build_pipi_js',
					''
				]
			},
			bibi_css: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/i/res/styles/_common-icons.scss',
					'dev-bib/i/res/styles/_bibi-stage.scss',
					'dev-bib/i/res/styles/_bibi-controls.scss',
					'dev-bib/i/res/styles/bibi.scss'
				],
				tasks: [
					'build_bibi_css',
					''
				]
			},
			pipi_css: {
				options: {
					livereload: false
				},
				files: [
					'dev-bib/i/res/styles/_common-icons.scss',
					'dev-bib/i/res/styles/_pipi-style.scss',
					'dev-bib/i.scss'
				],
				tasks: [
					'build_pipi_css',
					''
				]
			}
		}

	});


	// Resiter Tasks

	grunt.registerTask('', []);
	grunt.registerTask('default', ['watch']);

	grunt.registerTask('build_bibi_js', [
		'clean:bibi_js',
		'concat:bibi_js',
		'uglify:bibi_js',
		''
	]);

	grunt.registerTask('build_bibi_extension_cplus_js', [
		'clean:bibi_extension_cplus_js',
		'concat:bibi_extension_cplus_js',
		'uglify:bibi_extension_cplus_js',
		''
	]);

	grunt.registerTask('build_bibi_extension_unzipper_js', [
		'clean:bibi_extension_unzipper_js',
		'concat:bibi_extension_unzipper_js',
		'uglify:bibi_extension_unzipper_js',
		''
	]);

	grunt.registerTask('build_bibi_extension_epubcfi_js', [
		'clean:bibi_extension_epubcfi_js',
		'concat:bibi_extension_epubcfi_js',
		'uglify:bibi_extension_epubcfi_js',
		''
	]);

	grunt.registerTask('build_bibi_extension_jatex_js', [
		'clean:bibi_extension_jatex_js',
		'concat:bibi_extension_jatex_js',
		'uglify:bibi_extension_jatex_js',
		''
	]);

	grunt.registerTask('build_bibi_extension_overreflow_js', [
		'clean:bibi_extension_overreflow_js',
		'concat:bibi_extension_overreflow_js',
		'uglify:bibi_extension_overreflow_js',
		''
	]);

	grunt.registerTask('build_pipi_js', [
		'clean:pipi_js',
		'concat:pipi_js',
		'uglify:pipi_js',
		''
	]);

	grunt.registerTask('build_scripts', [
		'build_bibi_js',
		'build_bibi_extension_cplus_js',
		'build_bibi_extension_unzipper_js',
		'build_bibi_extension_epubcfi_js',
		'build_bibi_extension_jatex_js',
		'build_bibi_extension_overreflow_js',
		'build_pipi_js',
		''
	]);

	grunt.registerTask('build_bibi_css', [
		'clean:bibi_css',
		'compass:prod',
		'cmq:bibi_css',
		'cssmin:bibi_css',
		''
	]);

	grunt.registerTask('build_pipi_css', [
		'clean:pipi_css',
		'compass:prod',
		'cmq:pipi_css',
		'cssmin:pipi_css',
		''
	]);

	grunt.registerTask('build_styles', [
		'build_bibi_css',
		'build_pipi_css',
		''
	]);

	grunt.registerTask('build', [
		'build_scripts',
		'build_styles',
		''
	]);


};



