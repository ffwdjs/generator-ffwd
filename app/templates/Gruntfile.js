/* jshint node: true */
'use strict';

/*
This file was generated by generator-ffwd,
you probably should not modify it
*/

var fs = require('fs');
var path = require('path');

function loadConfig(options) {
  options = options || {};

  var files;
  var name;
  var loadableExp = /\.(json|js|node)$/;
  var config = options.config || {};
  var log = options.grunt ? options.grunt.log.writeln : console.log;
  var error = options.grunt ? options.grunt.log.error : console.error;

  try {
    files = fs.readdirSync(path.resolve('./grunt/config'));
    files.forEach(function(filename) {
      if (loadableExp.test(filename)) {
        name = filename.split('.').slice(0, -1).join('.');
        var conf = require(path.resolve('./grunt/config/'+ filename));

        if (typeof conf === 'function') {
          conf = conf(options);
        }
        // log('Loaded configuration for '+ name);
        config[name] = conf;
      }
    });
  }
  catch (err) {
    error('Can not load '+ name +' configuration:\n'+ err.stack);
  }
  return config;
}

function loadTasks(grunt) {
  var files;
  var name;
  var loadableExp = /\.(js|node)$/;

  try {
    files = fs.readdirSync(path.resolve('./grunt/tasks'));
    files.forEach(function(filename) {
      if (loadableExp.test(filename)) {
        name = filename.split('.').slice(0, -1).join('.');
        require(path.resolve('./grunt/tasks/'+ filename))(grunt);
      }
    });
  }
  catch (err) {
    grunt.log.error('Can not load '+ name +' configuration:\n'+ err.stack);
  }
}

module.exports = function (grunt) {
  var pkg = require('./package.json');
  grunt.pkg = pkg;

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // project tasks loading
  loadTasks(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var config = loadConfig({
    config: {
      pkg: pkg
    },
    grunt: grunt
  });
  grunt.initConfig(config);
  
  
  grunt.registerTask('develop', [
    'build:dev',
    'express:dev'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('serve', [
    'build',
    'express:prod'
  ]);
};
