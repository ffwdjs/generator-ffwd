'use strict';
var _ = require('underscore');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var common = require('../common');

var FFWDFeatureGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var self = this;
    var done = self.async();
    var questions = [];
    var force = true;
    var defaults = {};
    self.projectPkg = {};

    try {
      self.projectPkg = require(path.join(self.src._options.dest, 'package.json'));
    }
    catch (e) {}

    self.copyFromPkg = {
      name: 'projectName',
      description: 'projectDesc',
      version: 'projectVersion',
      author: 'projectAuthor'
    };
    _.each(self.copyFromPkg, function(yoName, pkgName) {
      defaults[yoName] = (self.projectPkg[pkgName] || self.config.get(yoName));
    });

    if (!self.config.existed) {
      force = true;
    }

    if (!self.options['skip-welcome-message']) {
      // Have Yeoman greet the user.
      self.log(yosay('Welcome to the marvelous FFWD feature generator!'));
    }


    if (!defaults.projectName || force) {
      questions.push({
        type    : 'input',
        name    : 'projectName',
        message : 'The name of your project',
        default : defaults.projectName || self.appname
      });
    }

    if (!defaults.projectDesc || force) {
      questions.push({
        type    : 'input',
        name    : 'projectDesc',
        message : 'A descriptionof your project',
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

    // questions.push({
    //   type    : 'confirm',
    //   name    : 'installPlugin',
    //   message : 'Do you want to install FFWD plugins?',
    //   default : defaults.installPlugin)
    // });

    // for first time/re-init, make new list of defaultPlugins
    // if(!defaults.installPlugin || force) {
    //   var plugins = defaults.plugins);
    //   // if we have previous plugin choice
    //   if (self._.isArray(plugins)) {
    //     var defaultPlugins = {};
    //     // convert it to object and assign checked
    //     plugins.forEach(function(plugin) {
    //       defaultPlugins[plugin] = true;
    //     });
    //     // concat with defautPlugins
    //     for (var key in defaultPlugins) {
    //       self.defaultPlugins[key] = defaultPlugins[key];
    //     }
    //   }
    // }

    var choices = [];
    var pluginObj = self.defaultPlugins;

    // make choice more dynamic and checked from previous choice
    // TODO: fetch from npm with 'assembleplugin' keyword
    for (var plugin in pluginObj) {
      if(pluginObj.hasOwnProperty(plugin)){
        choices.push({ name: plugin, checked: pluginObj[plugin] });
      }
    }

    // questions.push({
    //   name    : 'plugins',
    //   type    : 'checkbox',
    //   message : 'Which plugins would you like to include?',
    //   choices : choices,
    //   when: function( answers ) {
    //     return answers.installPlugin;
    //   }
    // });
    
    self.prompt(questions, function (answers) {
      self.projectName = self.projectPkg.name = answers.projectName;
      self.projectDesc = self.projectPkg.description = answers.projectDesc;
      self.projectVersion = self.projectPkg.version = answers.projectVersion;
      self.projectAuthor = self.projectPkg.author = answers.projectAuthor;
      
      self.projectPkg.keywords = self.projectPkg.keywords || [];
      if (self.projectPkg.keywords.indexOf('ffwd-feature') < 0) {
        self.projectPkg.keywords.push('ffwd-feature');
      }
      
      // self.plugins     = answers.plugins;
      
      //save config to .yo-rc.json
      self.config.set(answers);

      done();
    }.bind(this));
  },

  directories: function () {
    this.mkdir('server');
    this.mkdir('client');
    this.mkdir('client/scripts');
    this.mkdir('doc');
    this.mkdir('doc/server');
    this.mkdir('doc/client');
    this.mkdir('test');
    this.mkdir('test/server');
    this.mkdir('test/client');
  },

  projectfiles: function () {
    this.copy('../../app/templates/editorconfig', '.editorconfig');
    this.copy('../../app/templates/bowerrc', '.bowerrc');
    this.copy('../../app/templates/jshintrc', '.jshintrc');

    this.template('../../app/templates/_index.js', 'index.js');
    // this.template('../../app/templates/_package.json', 'package.json');
    this.template('../../app/templates/_README.md', 'README.md');
    this.template('../../app/templates/_index.js', 'index.js');
    
    this.template('../../app/templates/client/_README.md', 'client/README.md');

    this.template('../../app/templates/server/_index.js', 'server/index.js');
    this.template('../../app/templates/server/_README.md', 'server/README.md');

    this.template('../../app/templates/doc/_index.html', 'doc/index.html');
    
    // this.template('_package.json', 'package.json');
    
    var pkgPath = path.join(this.src._options.dest, 'package.json');
    common.writeJSONSync(pkgPath, this.projectPkg);
    
    this.template('client/scripts/_index.js', 'client/scripts/index.js');
  }
});

module.exports = FFWDFeatureGenerator;