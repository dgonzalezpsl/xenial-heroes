// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.
//require('@angular/upgrade/bundles/upgrade-static.umd.js');
//require('@angular/upgrade/esm5/upgrade');
//require('angular');
//require('angular-mocks/angular-mocks');
//require('angular-ui-bootstrap');
//require('@uirouter/angularjs');
//require('angular-translate');
//require('angular-translate-loader-partial');
//require('angular-animate');
//require('ngstorage');
//require('angular-socialshare');

require('core-js/es6');
require('core-js/es5');
require('core-js/es7/reflect');


require('zone.js/dist/zone');
//require('zone.js/dist/zone-testing');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');
require('zone.js/dist/jasmine-patch');
//require('zone.js/dist/zone-testing');
//require('node_modules/zone.js/dist/jasmine-patch.js');
//require('zone.js/dist/mocha-patch');

const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());
// TODO. Configure js specs
//const context = require.context('../../src/', true, /\.spec\.ts$|\.spec\.js$/);
const context = require.context('../../src/', true, /\.spec\.ts$/);
context.keys().forEach(context);
