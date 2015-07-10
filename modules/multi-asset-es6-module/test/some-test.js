import chai from 'chai';
const expect = chai.expect;

describe('ES6 Module', function() {
	let multiAssetES6Module;

	beforeEach(function() {
		return System.import('src/module.js').then(function(m) {
			multiAssetES6Module = m.default; // TODO: raise a bug about the fact we need to use `.default` here
		});
	});

	it('does something', function() {
		expect(multiAssetES6Module()).to.equal('<span class="multi-asset-es6-module">@Multi-Asset ES6 Module</span>');
	});
});
