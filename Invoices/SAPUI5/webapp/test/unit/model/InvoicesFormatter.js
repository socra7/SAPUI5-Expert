// @ts-nocheck
sap.ui.define([
    "logaligroup/SAPUI5/model/InvoicesFormatter",
    "sap/ui/model/resource/ResourceModel"

],
    /**
     * 
     * @param {*} InvoicesFormatter 
     * @param {*} ResourceModel 
     */

    function (InvoicesFormatter, ResourceModel) {
        'use strict';

        QUnit.module("invoices Status", {

            beforeEach: function () {
                this._oresourceModel = new ResourceModel({
                    bundleUrl: sap.ui.require.toUrl("logaligroup/SAPUI5") + "/i18n/i18n.properties"
                });
            },

            afterEach: function () {
                this._oresourceModel.destroy();
            }
        });

        QUnit.test("Should return the Invoice Status" , function() {
            let oModel = this.stub();
            oModel.withArgs("i18n").returns(this._oresourceModel);

            let oViewStub = {
                getModel : oModel
            };

            let oControllerStub = {
                getView : this.stub().returns(oViewStub)
            }

            let fnIsolatedFormatter = InvoicesFormatter.invoiceStatus.bind(oControllerStub);

            //Assert
            assert.strictEqual(fnIsolatedFormatter("A"), "New", "the invoice status for A is correct" );
            assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "the invoice status for A is correct" );
            assert.strictEqual(fnIsolatedFormatter("C"), "Done", "the invoice status for A is correct" );


        })

    });