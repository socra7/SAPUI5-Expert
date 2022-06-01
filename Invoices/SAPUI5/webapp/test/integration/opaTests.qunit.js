// @ts-nocheck
QUnit.config.autostart = false;
/* global QUnit */

sap.ui.getCore().attachInit(function () {
    "use strict"

    sap.ui.require([
        "logaligroup/SAPUI5/test/integration/NavigationJourney"
    ], function () {

        QUnit.start();

    });

});