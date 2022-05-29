// @ts-nocheck

sap.ui.define([

], function () {
    'use strict';

    return {
        invoiceStatus: function (sStatus) {

            const resourceBundle = this.getView().getModel("i18n").getResourceBundle();

            switch (sStatus) {

                case 'Berlin': return resourceBundle.getText("InvoiceStatusA");
                case 'Hamburg': return resourceBundle.getText("InvoiceStatusB");
                case 'London': return resourceBundle.getText("InvoiceStatusC");
                default: return sStatus;

            }

        }

    }

});