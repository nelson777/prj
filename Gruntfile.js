/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    src: 'src',
    dest: 'www',
    nodeGlobal: '/usr/lib/node_modules',
    nodeLocal: 'node_modules',
    vendor: '<%= src %>/vendor',
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    clean: [
            '<%= vendor %>/*',
            '<%= dest %>',
    ],
    copy: {
        main: {
            files: [
                { src:"<%= nodeLocal %>/jquery/dist/jquery.min.js", dest:"<%= vendor %>/jquery/jquery.min.js" },
                { src:"<%= nodeGlobal %>/requirejs/require.js", dest:"<%= vendor %>/require/require.js" },
                { src:"<%= src %>/index.html", dest:"<%= dest %>/index.html" }
            ]

        }
    },
    'string-replace': {
        dist: {
            files: {
                '<%= dest %>/index.html': '<%= dest %>/index.html'
            } ,
            options: {
                replacements: [{
                    pattern: /\.\.\/www\//ig,
                    replacement: ''
                },
                {
                    pattern: /config\/app|vendor\/require\/require/ig,
                    replacement: 'js\/prj.min'
                }]
            }
        }
    },
    requirejs: {
      compile: {
          options: {
              baseUrl: '<%= src %>/js',
              name: "../config/app",
              out: "<%= dest %>/js/prj.min.js",
              paths: {
                   jquery: '../vendor/jquery/jquery.min',
                   requireLib: '../vendor/require/require'
              },
              include: 'requireLib'
          }
      }
  },
  sass: {
      dist: {
          options: {
              sourcemap: 'none',
              style: 'compressed'
          },
          files: {
              '<%= dest %>/css/base.css': '<%= src %>/scss/base.scss'
          },

      }
  }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['clean', 'copy', 'string-replace', 'requirejs', 'sass']);

};
