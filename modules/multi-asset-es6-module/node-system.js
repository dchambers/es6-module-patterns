var System = require('systemjs');

System.config({
  transpiler: 'babel',
  meta: {
    '*.css': {
      loader: 'css'
    }
  },
  map: {
    'css': 'node_modules/system-css/css.js',
    'babel': 'dist/babel.js'
  }
});
