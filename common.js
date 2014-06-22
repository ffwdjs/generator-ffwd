var fs = require('fs');
var path = require('path');
var common = module.exports = {};

common.writeJSON = function(filename, data, cb) {
  fs.writeFile(filename, JSON.stringify(data, null, 2), cb || function() {});
};

common.writeJSONSync = function(filepath, data) {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
};

