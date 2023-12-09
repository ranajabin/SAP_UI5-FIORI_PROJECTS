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

        return Controller.extend("pollution.pollutiontracker.controller.Detail", {

            // dataPath: "https://c524f1c2-97c6-4494-8956-ca5263e17768.mock.pstmn.io/state?country=India",

            onInit: function () {

                // var dataModel = new JSONModel(this.dataPath);
                // var dataModel = new JSONModel("https://c524f1c2-97c6-4494-8956-ca5263e17768.mock.pstmn.io/state?country=India");
                // this.getView().setModel(dataModel, "States");

                var oOwnerComponent = this.getOwnerComponent();

                this.oRouter = oOwnerComponent.getRouter();
                this.oModel = oOwnerComponent.getModel();

                this.oRouter.getRoute("Master").attachPatternMatched(this._onSelectingCountry, this);
                this.oRouter.getRoute("Detail").attachPatternMatched(this._onSelectingCountry, this);

            },

            _onSelectingCountry: function (oEvent) {
                debugger;
                this._country = oEvent.getParameter("arguments").country || this._country || "0";

                var stateModel = new JSONModel('https://c524f1c2-97c6-4494-8956-ca5263e17768.mock.pstmn.io/state?country=' + this._country);
                stateModel.setSizeLimit(1000);
                this.getView().setModel(stateModel, "States");
            },

            onStatePress: function (oEvent) {

                var state = oEvent.getSource().getBindingContext("States").getObject().state;
                this.oRouter.navTo("City", { layout: fioriLibrary.LayoutType.ThreeColumnsMidExpanded, state: state, country: this._country });

            },

            // onEditToggleButtonPress: function() {
            //     var oObjectPage = this.getView().byId();
            //     bCurrentShowFooterState = oObjectPage.getShowFooter();

            //     oObjectPage.setShowFooter(!bCurrentShowFooterState);
            // }
        });
    });
