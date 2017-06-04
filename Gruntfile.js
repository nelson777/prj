/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    destRoot: 'www/',
    nodeGlobal: '/usr/lib/node_modules/',
    nodeLocal: 'node_modules/',
    vendor: 'src/vendor/',
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    clean: [
            '<%= vendor %>*',
            '<%= destRoot %>/js*'
    ],
    copy: {
        main: {
            files: [
                { src:"<%= nodeLocal %>jquery/dist/jquery.min.js", dest:"<%= vendor %>jquery/jquery.min.js" },
                { src:"<%= nodeGlobal %>requirejs/require.js", dest:"<%= vendor %>require/require.js" }
            ]

        }
    },
    requirejs: {
      compile: {
          options: {
              baseUrl: 'src/js',
              name: "../config/app",
              out: "www/js/prj.min.js",
              paths: {
                   jquery: '../vendor/jquery/jquery.min',
                   requireLib: '../vendor/require/require'
              },
              include: 'requireLib'
          }
      }
  }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task.
  grunt.registerTask('default', ['clean', 'copy', 'requirejs']);

};
