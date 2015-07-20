'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('ES5 Module', function() {
	var multiAssetES5Module;

	beforeEach(function() {
		return System.import('src/module.js').then(function(m) {
			multiAssetES5Module = m;
		});
	});

	it('does something', function() {
		expect(multiAssetES5Module()).to.equal(
			'<div class="multi-asset-es5-module">\n' +
				'  <div>@Multi-Asset ES5 Module</div>\n' +
				'  <div>@ES5 Module</div>\n' +
				'  <div>@ES6 Module</div>\n' +
				'  <div>@Internal Dep</div>\n' +
				'</div>\n'
		);
	});
});
