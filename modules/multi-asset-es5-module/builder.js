var Builder = require('systemjs-builder');
var builder = new Builder();

builder.loadConfig('./config.js')
.then(function() {
  return builder.build('src/module.js', 'dist/es5-module-bundle.js');
})
.catch(function(err) {
  console.error(err);
});
