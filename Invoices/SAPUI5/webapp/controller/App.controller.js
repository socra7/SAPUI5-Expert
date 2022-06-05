// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    //"sap/m/MessageToast"

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */

    function (Controller) {
        'use strict';

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () {

                //Responsive compact or cozy, depends of device
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

            },

            onOpenDialogHeader : function () {
                
                this.getOwnerComponent().openHelloDialog();
            }
            
        });

    });