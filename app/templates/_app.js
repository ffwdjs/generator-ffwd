/* jshint node: true */
'use strict';

/*
This file was generated by generator-ffwd,
you probably should not modify it
*/

var exampleFeature = require('./server');

var app = require('ffwd-net/server')({
  features: {
    'example-feature': exampleFeature
  }
});

module.exports = app;

// require('http').createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'))
// });