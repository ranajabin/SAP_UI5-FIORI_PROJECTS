sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/f/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, fioriLibrary) {
        "use strict";

        return Controller.extend("pollution.pollutiontracker.controller.Master", {

            dataPath: "https://c524f1c2-97c6-4494-8956-ca5263e17768.mock.pstmn.io/countries",

            onInit: function () {

                var dataModel = new JSONModel(this.dataPath);
                this.getView().setModel(dataModel, "countries");

                this.oRouter = this.getOwnerComponent().getRouter();
            },

            onCountryPress: function (oEvent) {
                debugger;

                // var oFCL = this.getView().getParent().getParent();
                // oFCL.setLayout(fioriLibrary.LayoutType.TwoColumnsMidExpanded);

                var country = oEvent.getSource().getBindingContext("countries").getObject().country;

                this.oRouter.navTo("Detail", { layout: fioriLibrary.LayoutType.TwoColumnsMidExpanded, country: country });

            }
        });
    });
