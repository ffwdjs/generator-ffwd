/* jshint node: true */
'use strict';

/*
This file was generated by generator-ffwd,
you probably should not modify it
*/

var exampleFeature = require('./server');

var app = require('ffwd-net/server')({
  appName: 'FFWD examples',

  staticContent: {
    'doc':    '/docs',
    'pages':  '/pages',
    'dist':   '/'
  },

  features: {
    'ffwd-modeling': true,
    'ffwd-auth': true,

    'example-feature': exampleFeature
  }
});

module.exports = app;
