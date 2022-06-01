// @ts-nocheck
sap.ui.define([
    "logaligroup/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"

],
    /**
     * 
     * @param {*} opaQunit 
     * @param {*} HelloPanel 
     */

    function (mockServer, opaQunit, HelloPanel) {
        'use strict';

        QUnit.module("Navigation");

        opaQunit("Should open the Hello Dialog", function (Given, When, Then) {

            //initialize the mock server
            mockServer.init();            

            //Arrangements
            Given.iStartMyUIComponent({

                componentConfig: {

                    name: "logaligroup.SAPUI5"
                }

            });

            //Actions
            When.onTheAppPage.iSayHelloDialogButton();

            //Assertions
            Then.onTheAppPage.iSeeTheHelloDialog();

            //Cleanup
            Then.iTeardownMyApp();

        });

    });