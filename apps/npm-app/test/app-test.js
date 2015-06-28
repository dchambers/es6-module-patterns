/* eslint-disable no-unused-vars */
import app from '../src/app';
import chai from 'chai';
const expect = chai.expect;

describe('App', function() {
	it('works', function() {
		expect(document.getElementById('es5-module').innerHTML).to.equal('@ES5 Module');
		expect(document.getElementById('es6-module').innerHTML).to.equal('@ES6 Module');
	});
});
