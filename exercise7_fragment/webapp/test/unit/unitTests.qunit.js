/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"exercise7_fragment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
