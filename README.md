# Patterns for Modular ES6 Development

## Introduction

The goal of this article is to show you a set of patterns and best practices for modular ES6 development. You may either
just want to know what the best practices are for developing an NPM module, or you may be building a large SPA that you
would like to keep modular. In case you've never built a modular SPA, then it's worth stating the benefits of this
approach:

  1. Because app components also run in isolation, they can be unit tested rather than integration tested, which has the following benefits:
		 1. The application services your component depends will have been de-coupled, allowing you to exhaustively Given/When/Then test your code, rather than happy path testing your code by connecting to an unreliable back-end.
		 2. Because your component works in isolation, you can avoid slow, brittle & unreliable Selenium tests, instead opting for a single Selenium smoke test.
	2. Developer productivity is improved since the browser refresh time is much lower for a single component with mocked services than it is for loading the entire app.
	3. The client-side developers can create components before the server-side guys have finished creating the back-end services.
  4. You can have multiple globally distributed teams creating the components that will comprise your application.
	5. You can remove a component from your application by unlinking it from the app, knowing that no other component will directly depend on that component, and that the code for the component is not smeared around the app code base.

## Module Types

The following module types will be supported

  * ES5 Module
	* ES6 Module
	* Multi-Asset ES5 Module
	* Multi-Asset ES6 Module

Having the following features:

  * Should be possible for non NPM users to consume the module.
  * Module should have fast reliable Node.js tests that the developer can regularly run.
	* Module should have browser tests the developer can run too.
	* Module should be approachable: `npm install` to install, `npm test` to test & `npm publish` to publish.
	* The test command should include a linting step so submitted patches will automatically conform to the module's code style guide, and to help catch errors.
	* Multi-Asset libraries should have an `npm run workbench` command that allows the component to be worked on in isolation.

## Client App Types

The following client app types will be supported:

  * NPM Client App
	* JSPM Client App

Having the following features:

	* It should be easy for app developers to assemble apps using a number of internally and externally developed components.
	* It should be possible for internally developed components to be hooked up directly, so that component changes are immediately visible in the app.
  * There should be some browser based integration tests that verify that everything works in the complete app.
	* The app should be approachable;: `npm install` to install & `npm test` to test.
	* There should be an `npm run serve` command that allows the app to be used during development.
	* There should be an `npm run build` command that allows the app to be deployed.

## ES5 Module

TODO: create the code for all the module and app types before writing any more...
