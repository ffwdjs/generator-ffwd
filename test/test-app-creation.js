/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var _ = require('underscore');

var tempPath = path.join(__dirname, 'temp');
var defaultSetup = {
  'projectName': 'ffwd app',
  'projectDesc': 'A simple app based on FFWD',
  'projectVersion': '0.0.1',
  'projectAuthor': 'Max Mustermann <max@gmx.de>',
  'scriptsCompiler': 'none',
  'stylesCompiler': 'none'
};
var baseExpectedFiles = [
  // add files you expect to exist here.
  '.bowerrc',
  '.editorconfig',
  '.jshintrc',
  'client/README.md',
  'doc/index.html',
  'grunt/config/bower.js',
  'grunt/config/clean.js',
  'grunt/config/copy.js',
  'grunt/config/jsdoc.js',
  'grunt/config/jshint.js',
  'grunt/config/watch.js',
  'Gruntfile.js',
  'app.js',
  'demo.js',
  'package.json',
  'README.md',
  'server/index.js',
  'server/README.md'
];


function checkFiles(setup, expected) {
  return function(done) {
    helpers.testDirectory(tempPath, function(err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('ffwd:app', [
        '../../app'
      ], [], {
        'skip-welcome-message': true
      });
      

      expected = expected.concat(baseExpectedFiles);

      helpers.mockPrompt(this.app, _.defaults(setup, defaultSetup));
      
      this.app.options['skip-install'] = true;
      
      this.app.run({}, function() {
        helpers.assertFile(expected);
      
        done();
      });
    }.bind(this));
  }
}


describe('FFWD generator', function() {
  after(function(done) {
    helpers.testDirectory(tempPath, function(err) {
      if (err) {
        return done(err);
      }
      
      done();
    });
  });


  it('creates expected files', checkFiles({}, []));


  describe('scripts compiler', function() {
    describe('requirejs', function() {
      it('creates expected files', checkFiles({
        scriptsCompiler: 'requirejs'
      }, [
        'grunt/config/requirejs.js',
        'client/scripts/requirejs-conf.js'
      ]));
    });

    describe('browserify', function() {
      it('creates expected files', checkFiles({
        scriptsCompiler: 'browserify'
      }, [
        'grunt/config/browserify.js',
        'grunt/config/uglify.js'
      ]));
    });
  });


  describe('styles compiler', function() {
    describe('compass', function() {
      it('creates expected files', checkFiles({
        stylesCompiler: 'compass'
      }, [
        'grunt/config/compass.js',
        'client/sass'
      ]));
    });

    describe('less', function() {
      it('creates expected files', checkFiles({
        stylesCompiler: 'less'
      }, [
        'grunt/config/less.js',
        'client/less'
      ]));
    });
  });
});
