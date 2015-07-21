import './style.css!';

import es5Module from '@dchambers/es5-module';
import es6Module from '@dchambers/es6-module';
import internalDep from './dep.js';

export default function() {
	return `
		<div class="multi-asset-es6-module">
			<div>@Multi-Asset ES6 Module</div>
			<div>${es5Module()}</div>
			<div>${es6Module()}</div>
			<div>${internalDep()}</div>
		</div>`;
}
