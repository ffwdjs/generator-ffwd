'use strict';
var _ = require('underscore');
var common = require('../common');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');


var FFWDAppGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      this.installDependencies({ 
        bower: false,
        npm: true,
        skipInstall: this.options['skip-install']
      });
    });
  },

  askFor: function () {
    var self = this;
    var done = self.async();
    var questions = [];
    var force = false;
    var projectPkg = {};
    var defaults = self.config.getAll();
    var copyFromPkg = {
      name: 'projectName',
      description: 'projectDesc',
      version: 'projectVersion',
      author: 'projectAuthor'
    };

    if (!self.options['skip-welcome-message']) {
      // Have Yeoman greet the user.
      self.log(yosay('Welcome to the marvelous FFWD feature generator!'));
    }

    try {
      projectPkg = require(path.join(self.src._options.dest, 'package.json'));
    }
    catch (e) {}

    if (!self.config.existed || self.options.ask) {
      force = true;
    }

    _.each(copyFromPkg, function(yoName, pkgName) {
      defaults[yoName] = projectPkg[pkgName] || defaults[yoName];
    });
    
    defaults.projectName = defaults.projectName || path.basename(process.cwd());

    if (!defaults.projectName || force) {
      questions.push({
        type    : 'input',
        name    : 'projectName',
        message : 'The name of your project',
        default : defaults.projectName
      });
    }

    if (!defaults.projectDesc || force) {
      questions.push({
        type    : 'input',
        name    : 'projectDesc',
        message : 'A description of your project',
        default : defaults.projectDesc
      });
    }

    if (!defaults.projectVersion || force) {
      questions.push({
        type    : 'input',
        name    : 'projectVersion',
        message : 'The version of the project',
        default : defaults.projectVersion
      });
    }

    if (!defaults.projectAuthor || force) {
      questions.push({
        type    : 'input',
        name    : 'projectAuthor',
        message : 'The author of the project',
        default : defaults.projectAuthor
      });
    }

    if (!defaults.stylesCompiler || force) {
      questions.push({
        name:   'stylesCompiler',
        type    : 'list',
        message : 'Which styles compilation would you like to use?',
        choices : [
          'none',
          'compass',
          'less'
        ],
        default: defaults.stylesCompiler
      });
    }

    if (!defaults.scriptsCompiler || force) {
      questions.push({
        name:   'scriptsCompiler',
        type    : 'list',
        message : 'Which scripts compilation would you like to use?',
        choices : [
          'none',
          'requirejs',
          'browserify'
        ],
        default: defaults.scriptsCompiler
      });
    }

    self.prompt(questions, function (answers) {
      _.defaults(answers, defaults);
      _.extend(self, answers);

      //save config to .yo-rc.json
      console.info('saving configuration to .yo-rc.json', answers);
      self.config.set(answers);

      done();
    }.bind(this));
  },

  directories: function () {
    this.mkdir('client');
    this.mkdir('client/scripts');
    this.mkdir('server');
    this.mkdir('grunt');
    this.mkdir('grunt/config');
    this.mkdir('grunt/tasks');
    this.mkdir('test');
    this.mkdir('test/client');
    this.mkdir('test/server');
  },

  projectfiles: function () {
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('jshintrc', '.jshintrc');
    
    this.copy('client/scripts/index.tpl', 'client/scripts/index.tpl');
    this.copy('client/templates/default.tpl', 'client/templates/default.tpl');
    this.copy('client/templates/error.tpl', 'client/templates/error.tpl');

    this.copy('grunt/config/bower.js', 'grunt/config/bower.js');
    this.copy('grunt/config/clean.js', 'grunt/config/clean.js');
    this.copy('grunt/config/copy.js', 'grunt/config/copy.js');
    this.copy('grunt/config/ffwd-doc.js', 'grunt/config/ffwd-doc.js');
    this.copy('grunt/config/express.js', 'grunt/config/express.js');
    this.copy('grunt/config/jsdoc.js', 'grunt/config/jsdoc.js');
    this.copy('grunt/config/jshint.js', 'grunt/config/jshint.js');
    this.copy('grunt/config/watch.js', 'grunt/config/watch.js');

    this.copy('grunt/tasks/build.js', 'grunt/tasks/build.js');
    this.copy('grunt/tasks/ffwd-doc.js', 'grunt/tasks/ffwd-doc.js');
    this.copy('grunt/tasks/scripts.js', 'grunt/tasks/scripts.js');
    this.copy('grunt/tasks/styles.js', 'grunt/tasks/styles.js');
    
    // could be "less" or "compass"
    if (this.stylesCompiler && this.stylesCompiler != 'none') {
      this.copy('grunt/config/'+ this.stylesCompiler +'.js', 'grunt/config/'+ this.stylesCompiler +'.js');

      if (this.stylesCompiler === 'compass') {
        this.mkdir('client/sass');
      }
      else {
        this.mkdir('client/less');
      }
    }

    // could be "requirejs" or "browserify"
    if (this.scriptsCompiler && this.scriptsCompiler != 'none') {
      this.copy('grunt/config/'+ this.scriptsCompiler +'.js', 'grunt/config/'+ this.scriptsCompiler +'.js');

      this.template('client/scripts/_index-'+ this.scriptsCompiler +'.js', 'client/scripts/index.js');

      if (this.scriptsCompiler === 'requirejs') {
        this.template('client/scripts/_requirejs-conf.js', 'client/scripts/requirejs-conf.js');
      }
      else {
        this.copy('grunt/config/uglify.js', 'grunt/config/uglify.js');
      }
    }

    this.template('_app.js', 'app.js');
    this.template('_bower.json', 'bower.json');
    this.template('_db-setup.json', '.db-setup.json');
    this.template('_demo.js', 'demo.js');
    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    
    this.template('client/_README.md', 'client/README.md');

    this.template('doc/_index.html', 'doc/index.html');

    this.template('server/_index.js', 'server/index.js');
    this.template('server/_README.md', 'server/README.md');
  }
});

module.exports = FFWDAppGenerator;
