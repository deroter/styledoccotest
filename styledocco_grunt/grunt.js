module.exports = function(grunt) {
    grunt.initConfig({
        mincss: {
            'css/all.css': [ 'css/style.css' ]
        },
        styleguide: {
            styledocco: {
                options: {
                    framework: {
                        name: 'styledocco'
                    },
                    name: 'Style Guide',
                    template: {
                        include: ['plugin.css', 'app.js']
                    }
                },
                files: {
                    'docs': 'css/style.css'
                },
            }
        },
        watch: {
            files: ['css/*.css'],
             tasks: 'mincss styleguide'
        }
    });
      grunt.loadNpmTasks('grunt-contrib');
   grunt.loadNpmTasks('grunt-styleguide');
};