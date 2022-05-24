// @ts-nocheck
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],

    /**
     * @param {typeof sap.ui.base.ManagedObject} ManagedObject
     * @param {typeof sap.ui.core.Fragment } Fragment
     */

    function (ManagedObject, Fragment) {
        'use strict';

        return ManagedObject.extend("logaligroup.SAPUI5.controller.HelloDialog", {

            //Pasamos la vista como parámetro en le constructor
            constructor: function (oView) {
                this._oView = oView;
            },

            //eliminamos la instancia de la vista
            exit: function () {
                delete this._oView;
            },

            open: function () {

                const oView = this._oView;

                //create dialog lazily
                if (!oView.byId("helloDialog")) {

                    //creamos un objeto que contienne un función para el cierre
                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();
                        }
                    };

                    //load asynctonous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "logaligroup.SAPUI5.view.HelloDialog",
                        controller: oFragmentController
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("helloDialog").open();
                }

            }
        });
    });