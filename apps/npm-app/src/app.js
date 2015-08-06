import es5Module from '@dchambers/es5-module';
import es6Module from '@dchambers/es6-module';

document.body.innerHTML = `
	<div id="es5-module">${es5Module()}</div>
	<div id="es6-module">${es6Module()}</div>
`;
