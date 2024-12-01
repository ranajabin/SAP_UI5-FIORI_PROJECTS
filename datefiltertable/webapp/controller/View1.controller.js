sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("table.datefiltertable.controller.projectlist", {
            onInit: function () {               

                var jsonData = new sap.ui.model.json.JSONModel("../model/Date.json");
                this.getView().setModel(jsonData, "Data1");
        
            },

            onPressGo: function (oEvent) {
                debugger;

                // var sFrom = new Date(this.getView().byId("_idSdate").getDateValue());
                // var sTo = new Date(this.getView().byId("_idEdate").getDateValue());

                 var sFrom = new Date(this.getView().byId("_idSdate").getValue());
                var sTo = new Date(this.getView().byId("_idEdate").getValue());

                // var oModeldate = new sap.ui.model.json.JSONModel({
                //     sDate: sFrom,
                //     sEnd: sTo
                //  });
                //  this.getView().setModel(oModeldate);

                // var sdt = oModeldate.oData.sDate;
                // var sEd = oModeldate.oData.sEnd;

                var oTable = this.getView().byId("table1"),
                    oBinding = oTable.getBinding("items");

                // if (oEvent.getId() == "liveChange") {
                // 	sQuery = oEvent.getParameter("query");
                // }

                var aFilters = [];
                if (sFrom) {

                    // var oFilter1 = new sap.ui.model.Filter("Startdate", sap.ui.model.FilterOperator.BT, sFrom, sTo)
                    // var oFilter1 = new sap.ui.model.Filter("Feb 02, 2024", FilterOperator.BT, "Feb 10, 2024");
                    aFilters.push(new Filter("Startdate", FilterOperator.BT, sFrom, sTo));

                    // var aFilter = new sap.ui.model.Filter([oFilter1]);
                }
                oBinding.filter(aFilters);

                // oBinding.bindRows({filters:[oFilter1]});
            },

            onNavBack: function () {
                history.go(-1);
            }

        });
    });
