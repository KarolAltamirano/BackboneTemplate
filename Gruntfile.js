module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        notify: {
            watch: {
                options: {
                    title: 'Grunt Watch',
                    message: 'Compilation finished'
                }
            }
        },
        watch: {
            scripts: {
                files: ['sass/*'],
                tasks: ['compass', 'notify:watch'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['compass']);
};
