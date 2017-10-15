module.exports = function (grunt) {
    //Configure plugins
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ['dist']
            },
            concat: {
                src: ['dist/<%= pkg.name %>.js']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            build: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.build.dest %>']
                }
            }
        },
        notify: {
            build: {
                options: {
                    message: 'Build is ready!'
                }
            }
        },
        watch: {
            files: ['src/**/*.js'],
            tasks: ['build']
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    // Configure tasks
    grunt.registerTask(
        'build', 'Clean, concat and uglify all the files to the dist directory.', ['clean:build', 'scripts', 'clean:concat', 'notify:build']
    );

    grunt.registerTask('scripts', 'Process the JavaScript files', ['concat', 'uglify'])

    grunt.registerTask('default', ['build', 'watch']);  
};
