if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * @module <%= _.slugify(projectName) %>
 * @description <%= projectDesc %>
 */
define('<%= _.slugify(projectName) %>', [
], function(
) {
  'use strict';
  var <%= _.camelize(projectName) %> = {};
  
  return <%= _.camelize(projectName) %>;
});