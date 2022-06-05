// @ts-nocheck
sap.ui.define([

    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"

],

    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.Device} Device
     */

    function (UIComponent, Models, ResourceModel, HelloDialog, Device) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {

                manifest: "json"

            },
            
            init: function () {

                // call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                //set the device model 
                this.setModel(Models.createDeviceModel() , "device");

                this._helloDialog = new HelloDialog(this.getRootControl());

                //create the view based on the url/hash
                this.getRouter().initialize();

            },


            exit : function() {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },


            openHelloDialog: function () {
                this._helloDialog.open();
            },


            getContentDensityClass: function(){

               if ( !Device.support.touch ){

                this._sContentDensityClass = "sapUiSizeCompact";

               }else{

                this._sContentDensityClass = "sapUiSizeCozy";
               }

               return this._sContentDensityClass;

            }


        });


    })