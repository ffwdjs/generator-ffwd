/* jshint node: true */
'use strict';

/*
This file was generated by generator-ffwd,
you probably should not modify it
*/

module.exports = function(grunt) {
  grunt.registerTask('gh-pages-update', function() {
    var tasks = [];
    var smthRandom = 'wswes'+ (new Date()).getTime();
    var ghPagesDir = '_tmp-<%= pkg.name %>-gh-pages';
    
    grunt.config.data.clean = grunt.config.data.clean || {};
    grunt.config.data.clean[smthRandom] = ghPagesDir;

    grunt.config.data.copy = grunt.config.data.copy || {};
    grunt.config.data.copy[smthRandom] = {
      files: [
        {
          expand: true,
          cwd: '<%= pkg.ffwd.dist %>/',
          src: ['**'],
          dest: ghPagesDir +'/'
        }
      ]
    };

    grunt.config.data.gitclone = grunt.config.data.gitclone || {};
    grunt.config.data.gitclone[smthRandom] = {
      options: {
        // verbose: true,
        branch: 'gh-pages',
        repository: '<%= pkg.repository %>',
        directory: ghPagesDir
      }
    };

    grunt.config.data.gitcommit = grunt.config.data.gitcommit || {};
    grunt.config.data.gitcommit[smthRandom] = {
      options: {
        // verbose: true,
        message: 'gh-pages update',
        cwd: ghPagesDir +'/'
      },
      files: {
        cwd: './',
        // TODO: improve that
        src: [
          '{images,styles,scripts,fonts}/**/*',
          '*.html'
        ]
      }
    };

    grunt.config.data.gitpush = grunt.config.data.gitpush || {};
    grunt.config.data.gitpush[smthRandom] = {
      options: {
        // verbose: true,
        branch: 'gh-pages',
        cwd: ghPagesDir +'/'
      }
    };

    tasks.push('clean:'+ smthRandom);
    tasks.push('build:prod');
    tasks.push('gitclone:'+ smthRandom);
    
    tasks.push('copy:'+ smthRandom);
    tasks.push('gitcommit:'+ smthRandom);
    tasks.push('gitpush:'+ smthRandom);

    tasks.push('clean:'+ smthRandom);
    tasks.push('-gh-pages-update:'+ smthRandom);

    grunt.task.run(tasks);
  });

  grunt.registerTask('-gh-pages-update', function(smthRandom) {
    for (var t in grunt.config.data) {
      // console.info('remove temp', !!grunt.config.data[t][smthRandom], t);
      delete grunt.config.data[t][smthRandom];
    }
  });
};