/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"exercise8_dialog/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
