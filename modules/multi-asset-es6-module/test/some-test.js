import chai from 'chai';
const expect = chai.expect;

describe('ES6 Module', function() {
	let multiAssetES6Module;

	beforeEach(function() {
		return System.import('src/module.js').then(function(m) {
			multiAssetES6Module = m.default;
		});
	});

	it('does something', function() {
		expect(multiAssetES6Module()).to.equal(`
		<div class="multi-asset-es6-module">
			<div>@Multi-Asset ES6 Module</div>
			<div>@ES5 Module</div>
			<div>@ES6 Module</div>
			<div>@Internal Dep</div>
		</div>`
		);
	});
});
