# Patterns for Modular ES6 Development

## Introduction

The goal of this article is to show you a set of patterns and best practices for modular ES6 development. You may either just want to know what the best practices are for developing an NPM module, or you may be building a large SPA that you would like to keep modular. In case you've never built a modular SPA, then it's worth stating the benefits of this approach:

  1. Because app components also run in isolation, they can be unit tested rather than integration tested, which has the following benefits:
   1. The application services your component depends on will have been de-coupled, allowing you to exhaustively _given/when/then_ test your code, rather than _happy-path_ testing an app connected to real back-end server(s).
   2. Because your component works in isolation, you can avoid slow, brittle & unreliable [selenium](http://www.seleniumhq.org/) tests &mdash; you'll be able to get by with a single integration _smoke-test_.
  2. Developer productivity is improved since the browser refresh time is much lower for a single component with mocked services than it is for loading the entire app.
  3. The client-side developers can create components before the server-side guys have finished creating the back-end services.
  4. You can have multiple globally distributed teams creating the components that will comprise your application.
  5. You can remove a component from your application by unlinking it from the app, knowing that no other component will directly depend on that component, and that the code for the component isn't smeared around the app code base.

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

  * JSPM Client App
  * NPM Client App

Having the following features:

  * It should be easy for app developers to assemble apps using a number of internally and externally developed components.
  * It should be possible for internally developed components to be hooked up directly, so that component changes are immediately visible in the app.
  * There should be some browser based integration tests that verify that everything works in the complete app.
  * The app should be approachable;: `npm install` to install & `npm test` to test.
  * There should be an `npm run serve` command that allows the app to be used during development.
  * There should be an `npm run build` command that allows the app to be deployed.

## ES5 Module

The ES5 module uses the following _best-of-breed_ tools:

  * [NPM](https://www.npmjs.com/) is used for both dependency management and as a build tool.
  * [browserify](http://browserify.org/) is used to allow the library to be used outside of Node.js, within a browser.
  * [eslint](http://eslint.org/) is used to lint the source code.
  * [chai](http://chaijs.com/) is the assertion framework used for all tests.
  * [mocha](http://mochajs.org/) is used to run the tests within Node.js.
  * [Karma](http://karma-runner.github.io/) is used to run the tests within the browser.
  * [mkdirp](https://github.com/substack/node-mkdirp) is used for cross-platform nested directory creation.

and is comprised of the following files and directories:

  * `dist`: where any derived distribution packages will be placed.
  * [`src`](https://github.com/dchambers/es6-module-patterns/tree/master/modules/es5-module/src): where the source code will be placed.
  * [`test`](https://github.com/dchambers/es6-module-patterns/tree/master/modules/es5-module/test): where the tests will be placed.
  * [`.eslintrc`](https://github.com/dchambers/es6-module-patterns/tree/master/modules/es5-module/.eslintrc): contains the linting settings.
  * [`karma.conf.js`](https://github.com/dchambers/es6-module-patterns/blob/master/modules/es5-module/karma.conf.js): contains the browser testing settings.
  * [`package.json`](https://github.com/dchambers/es6-module-patterns/blob/master/modules/es5-module/package.json): the project build configuration.

where the `package.json` file defines the following build tasks:

  * **`prepublish`**: causes `dist/es5-module-standalone.js` to be created when the project is either installed or published.
  * **`test`**: runs the `test:lint`, `test:node` and `test:browser` tasks.
  * **`build:module`**: causes `dist/es5-module-standalone.js` to be created.
  * **`test:lint`**: causes all code within `src` and `test` to be linted using the configuration within `.eslintrc`.
  * **`test:node`**: causes all of the tests within `test` to be run on Node.js.
  * **`test:browser`**: causes Karma to be started using the configuration defined within `karma.conf.js`.

Keith Cirkel's [How to Use npm as a Build Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) article provides a good justification for why NPM is used as the build tool, rather than [grunt](http://gruntjs.com/) or [gulp](http://gulpjs.com/), etc. Additionally, although it's theoretically possible to create reliable Selenium tests, as [lots](http://www.michaelthelin.se/?p=299) [of](http://googletesting.blogspot.co.uk/2009/06/my-selenium-tests-arent-stable.html) [people](http://sqa.stackexchange.com/questions/5240/are-selenium-functional-tests-reliable-enough-to-be-worthwhile) [have](https://blog.mozilla.org/webqa/2013/09/26/writing-reliable-locators-for-selenium-and-webdriver-tests/) [found](http://www.joecolantonio.com/2014/04/01/the-1-killer-of-selenium-script-performance-and-reliability/), it's really complicated and time-consuming to do it in practice, so it's actually better practice to componentize your app and then unit test the components.

## ES6 Module

In addition to what's used for the ES5 module, the ES6 module uses the following _best-of-breed_ tools:

  * [Babel](https://babeljs.io/) is used to convert the ES6 source code to ES5 so that other NPM users can still consume the module.
  * [babelify](https://github.com/babel/babelify) is used to make Babel available within browserify, so that the library can continue to be used outside of Node.js.

where the `package.json` file defines the same tasks as the ES5 module, plus these addtional or modified tasks:

  * **`prepublish`**: does the same as for the ES5 module, but also runs the `build:es6` task.
  * **`build:es6`**: causes all the source code to be separately transpiled so that other NPM modules can depend on ES5 code.

There are a couple of noteworthy changes in `package.json` when compared to the ES5 module. Firstly, the `main` property now points to the transpiled ES5 code:

```
"main": "dist/module.js",
```

and secondly, we use a `jspm` section to re-point `main` back to the original ES6 source code, so that JSPM users can transpile the ES6 source code themselves:

	"jspm": {
		"main": "src/module.js"
	},

This is slightly beneficial since ES6 modules have [_live-bindings_](https://github.com/ModuleLoader/es6-module-loader/wiki/Circular-References-&-Bindings#es6-circular-references--bindings), so that when a module updates an exported value that update is immediately available within dependent modules. Additionally, in the future it's likely that people will stop transpiling ES6 code when running tests on native ES6 platforms, since un-transpiled code is easier to debug. Here again, by having access to the native ES6 source code, JSPM users will more quickly have the flexibility to consider doing that.

## Multi-Asset ES5 Module

To be written once this module type has become stable.

## Multi-Asset ES6 Module

To be written once this module type has become stable.

## JSPM Client App

To be written once this app type has become stable.

## NPM Client App

To be written once this app type has become stable.
