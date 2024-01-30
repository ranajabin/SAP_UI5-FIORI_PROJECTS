/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"watch/stopwatch/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
