'use strict';

var es5Module = require('../src/module');
var chai = require('chai');
var expect = chai.expect;

describe('ES5 Module', function() {
	it('does something', function() {
		expect(es5Module()).to.equal('@ES5 Module');
	});
});
