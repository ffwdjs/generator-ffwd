if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * @module <%= _.slugify(projectName) %>
 * 
 * <%= projectName %> - <%= projectDesc %>
 */
define('<%= _.slugify(projectName) %>', [
  'requirejs-conf'
], function(
  requireConf
) {
  'use strict';

  // configure requirejs
  require.config(requireConf);

  // do something like
  require(requireConf.shim.<%= _.camelize(projectName) %> || [], function() {
    var Backbone = require('backbone');
    var $ = Backbone.$;
    // var _ = require('underscore');
    // ...
    
    // dependency defined in requirejs-conf 
    $(function() {
      /* global hljs: false */
      $('.highlight pre').each(function(i, e) {
        hljs.highlightBlock(e);
      });
    });
  });
});