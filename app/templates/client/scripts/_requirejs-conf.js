'use strict';
/* jshint node: true, browser: true */
/* global define: true */
(function(factory) {
  if (typeof define !== 'undefined' && define.amd) {
    define('requirejs-conf', factory);
  }
  else if(typeof module) {
    module.exports = factory();
  }
  else {
    this.AppConfig = factory();
  }
}(function() {
  
  /**
   * @module requirejs-conf
   * @type {Object}
   */
  var conf = {
    // urlArgs: "bust=" +  (new Date()).getTime(),
    baseUrl: './../',

    paths: {
      '<%= _.slugify(projectName) %>':          'scripts',

      // components compied from node modules
      'moment':                   'bower_components/moment/index',
      'polyglot':                 'bower_components/polyglot/index',
      'validator':                'bower_components/validator/index',
      'node-polyglot':            'bower_components/polyglot/index',
      'underscore':               'bower_components/underscore/index',
      'underscore.string':        'bower_components/underscore.string/index',
      // 'jquery':                   'bower_components/jquery/index',
      'jquery':                   'bower_components/jquery/dist/jquery',
      'mockjax':                  'bower_components/jquery-mockjax/index',
      'expectjs':                 'bower_components/expectjs/index',
      'expect.js':                'bower_components/expectjs/index',
      'mocha':                    'bower_components/mocha/index',
      'backbone':                 'bower_components/backbone/index',

      // loader plugins
      'text':                     'bower_components/requirejs-text/text',
      'tpl':                      'bower_components/requirejs-tpl/tpl',
      'propertyParser':           'bower_components/requirejs-plugins/src/propertyParser',
      'json':                     'bower_components/requirejs-plugins/src/json',
      'goog':                     'bower_components/requirejs-plugins/src/goog',
      'async':                    'bower_components/requirejs-plugins/src/async',
      'image':                    'bower_components/requirejs-plugins/src/image',
      'font':                     'bower_components/requirejs-plugins/src/font',

      // components who come by default
      'fastclick':                'bower_components/fastclick/lib/fastclick',
      'foundation':               'bower_components/foundation/js/foundation/foundation',

      // component who are not installed by default 
      // 'backbone-localstorage':    'bower_components/backbone-localstorage/index',
      // 'backbone-forms':           'bower_components/backbone-forms/index',
      // 'backbone-forms.list':      'bower_components/backbone-forms.list/index',
      // 'backbone-forms.templates': 'bower_components/backbone-forms.templates/index',
      // 'backgrid':                 'bower_components/backgrid/index',
      // 'backbone-pageable':        'bower_components/backbone-pageable/index',
      // 'backbone.paginator':       'bower_components/backbone.paginator/dist/backbone.paginator',


      'templates':                'templates/partials',
      'helpers':                  'templates/helpers',
    },
    
    shim: {
      'polyglot': {
        exports: 'Polyglot'
      },
      'node-polyglot': {
        exports: 'Polyglot'
      },

      // 'underscore': {
      'lodash': {
        exports: '_'
      },
      
      'underscore': {
        exports: '_'
      },
      
      '_jstools': {
        exports: '_'
      },

      'underscore.string': ['underscore'],

      // 'zepto': {
      'jquery': {
        exports: '$'
      },

      'mockjax': ['jquery'],

      'expectjs': {
        exports: 'expect'
      },
      
      'zepto': {
        exports: '$'
      },

      '$domlib': {
        exports: '$'
      },

      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },

      'helpers/t': ['node-polyglot'],

      'backbone-forms': [
        'backbone'
      ],
      'backbone-forms.list': [
        'backbone-forms'
      ],
      'backbone-forms.templates': [
        'backbone-forms'
      ],

      'backbone.paginator': [
        'backbone'
      ],

      'backgrid': [
        'backbone'
      ],

      'backbone-pageable': [
        'backbone'
      ],

      '<%= _.slugify(projectName) %>': [
        'backbone',
        'moment'
      ]
    },
    
    packages: [
      {name: '<%= _.slugify(projectName) %>', main: 'index.js'}
    ],

    app: {
      livereloadPort: 3001,
      name: '<%= projectName %>'
    }
  };

  // make a choice?
  conf.paths.foundation = 'bower_components/foundation/js/foundation';
  conf.paths['foundation-core'] = 'bower_components/foundation/js/foundation/foundation';
  conf.shim.foundation = conf.shim['foundation-core'] = {
    deps: ['jquery'],
    exports: 'jQuery.fn.foundation'
  };

  var foundationPlugins = {
    'abide': true,
    'accordion': true,
    'alert': true,
    'clearing': true,
    'dropdown': true,
    'interchange': true,
    'joyride': true,
    'magellan': true,
    'offcanvas': true,
    'orbit': true,
    'reveal': true,
    'tab': true,
    'tooltip': true,
    'topbar': true
  };
  var shim, plugin;
  for (plugin in foundationPlugins) {
    shim = foundationPlugins[plugin];
    conf.paths['foundation.'+ plugin] = 'bower_components/foundation/js/foundation/foundation.'+ plugin;
    conf.shim['foundation.'+ plugin] = shim === true ? ['foundation-core'] : shim;
  }

  return conf;
}));
