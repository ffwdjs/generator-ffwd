/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('FFWD feature generator', function () {
  var tempPath = path.join(__dirname, 'temp');
  before(function (done) {
    helpers.testDirectory(tempPath, function (err) {
      if (err) {
        return done(err);
      }

      this.feature = helpers.createGenerator('ffwd:feature', [
        '../../feature'
      ], ['feature'], {
        'skip-welcome-message': true
      });
      done();
    }.bind(this));
  });
  after(function(done) {
    done();
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',
      '.bowerrc',
      'package.json',
      'README.md',
      'index.js',
      'client/README.md',
      'client/scripts/index.js',
      'server/README.md',
      'server/index.js',
      'doc/index.html'
    ];

    helpers.mockPrompt(this.feature, {
      'projectName': 'ffwd feature',
      'projectDesc': 'A simple feature for FFWD',
      'projectVersion': '0.0.0'
    });
    this.feature.options['skip-install'] = true;
    this.feature.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
