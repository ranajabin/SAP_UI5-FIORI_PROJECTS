sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("pollution.pollutiontracker.controller.City", {

            // this.dataPath: "https://c524f1c2-97c6-4494-8956-ca5263e17768.mock.pstmn.io/state?country=India",

            onInit: function () {

                var oOwnerComponent = this.getOwnerComponent();

                this.oRouter = oOwnerComponent.getRouter();
                this.oModel = oOwnerComponent.getModel();

                this.oRouter.getRoute("City").attachPatternMatched(this._onSelectingState, this);

            },

            _onSelectingState: function (oEvent) {
                debugger;
                this._country = oEvent.getParameter("arguments").country || this._country || "0";
                this._state = oEvent.getParameter("arguments").state || this._state || "0";

                var stateModel = new JSONModel('https://c524f1c2-97c6-4494-8956-ca5263e17768.mock.pstmn.io/district?country =' + this._country + '& state=' + this._state);
                stateModel.setSizeLimit(1000);
                this.getView().setModel(stateModel, "Cities");
            },

            // onEditToggleButtonPress: function() {
            //     var oObjectPage = this.getView().byId();
            //     bCurrentShowFooterState = oObjectPage.getShowFooter();

            //     oObjectPage.setShowFooter(!bCurrentShowFooterState);
            // },

            // onExit: function() {
            //     this.oRouter.getRoute("Master").detachPatternMatched(this._onSelectingCountry, this);
            //     this.oRouter.getRoute("Detail").detachPatternMatched(this._onSelectingCountry, this);
            // }

        });
    });
