import es6Module from '../src/module';
import chai from 'chai';
const expect = chai.expect;

describe('ES6 Module', function() {
	it('does something', function() {
		expect(es6Module()).to.equal('@ES6 Module');
	});
});
