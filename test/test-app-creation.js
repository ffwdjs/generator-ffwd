/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('FFWD generator', function () {
  var tempPath = path.join(__dirname, 'temp');
  before(function (done) {
    helpers.testDirectory(tempPath, function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('ffwd:app', [
        '../../app'
      ], [], {
        'skip-welcome-message': true
      });
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.bowerrc',
      '.editorconfig',
      '.jshintrc',
      'client/README.md',
      'client/scripts/index.js',
      'doc/index.html',
      'grunt/config/bower.js',
      'grunt/config/clean.js',
      'grunt/config/copy.js',
      'grunt/config/jsdoc.js',
      'grunt/config/jshint.js',
      'grunt/config/less.js',
      'grunt/config/requirejs.js',
      'grunt/config/watch.js',
      'Gruntfile.js',
      'index.js',
      'package.json',
      'README.md',
      'server/index.js',
      'server/README.md'
    ];

    helpers.mockPrompt(this.app, {
      'projectName': 'ffwd app',
      'projectDesc': 'A simple app based on FFWD'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
