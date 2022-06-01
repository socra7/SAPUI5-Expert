// @ts-nocheck

sap.ui.define([

], function () {
    'use strict';

    return {
        invoiceStatus: function (sStatus) {

            const resourceBundle = this.getView().getModel("i18n").getResourceBundle();

            switch (sStatus) {

                case 'A': return resourceBundle.getText("InvoiceStatusA");
                case 'B': return resourceBundle.getText("InvoiceStatusB");
                case 'C': return resourceBundle.getText("InvoiceStatusC");
                default: return sStatus;

            }

        }

    }

});