/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"unint08_dialog/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
