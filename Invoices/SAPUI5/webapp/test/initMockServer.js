// @ts-nocheck
sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"

],
    /**
     * @param { typeof sap.m.MessageBox } MessageBox
     */
    function (mockserver, MessageBox) {
        'use strict';

        var aMockServcers = [];

        //initialize the mock server
        aMockServcers.push(mockserver.init());

        Promise.all(aMockServcers).catch(function (oError) {

            MessageBox.error(OError.message);
        }).finally(function () {
            sap.ui.require(["sap/ui/core/ComponentSupport"]);
        });

    });