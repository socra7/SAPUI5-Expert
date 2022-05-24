// @ts-nocheck
sap.ui.define([

    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"

],

    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */

    function (UIComponent, Models, ResourceModel, HelloDialog) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {

                manifest: "json"

            },
            
            init: function () {

                // call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                //set i18n on the view
                var i18nModel = new ResourceModel({
                    bundleName: "logaligroup.SAPUI5.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");

                this._helloDialog = new HelloDialog(this.getRootControl());

            },

            exit : function() {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            }


        });


    })