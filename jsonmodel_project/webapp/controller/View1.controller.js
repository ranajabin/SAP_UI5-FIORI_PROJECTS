sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/List",
    "sap/m/StandardListItem"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Dialog, List, StandardListItem) {
        "use strict";

        return Controller.extend("jsn.jsonmodelproject.controller.View1", {
            onInit: function () {
                var oData = [];
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "oModel");
            },

            addMoreRecord: function () {
                var sModel = this.getView().getModel("oModel");
                var oData = sModel.getData();

                var tempData = {
                    title: "New Record",
                    value: '',

                }

                oData.push(tempData);
                sModel.setData(oData);
            },

            summarizeData: function () {
                if (!this.Dialog) {
                    this.oDialog = new Dialog({
                        content: {
                            path: 'oModel>/', template:
                                new List({
                                    items: [
                                        new StandardListItem({ title: '{oModel>text}' })
                                    ]
                                })
                        }
                    })
                }
                this.getView().addDependent(this.oDialog);
                this.oDialog.open();
            }
        });
    });
