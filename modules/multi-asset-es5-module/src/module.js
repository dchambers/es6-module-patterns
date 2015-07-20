'use strict';

require('./style.css!');

var es5Module = require('@dchambers/es5-module');
var es6Module = require('@dchambers/es6-module');
var internalDep = require('./dep.js');

module.exports = function() {
	return '<div class="multi-asset-es5-module">\n' +
		'  <div>@Multi-Asset ES5 Module</div>\n' +
		'  <div>' + es5Module() + '</div>\n' +
		'  <div>' + es6Module() + '</div>\n' +
		'  <div>' + internalDep() + '</div>\n' +
		'</div>\n';
};
