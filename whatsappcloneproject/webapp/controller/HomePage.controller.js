sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("whatsapp.whatsappcloneproject.controller.View1", {
            onInit: function () {
            },
            
            onPress: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("Settings");
            },

            //     onSearch: function (oEvent) {
            //         debugger;
            //       var sQuery = oEvent.getParameter("query"),
            //           oTable = this.getView().byId("table1"),
            //           oBinding = oTable.getBinding("items");

            //       if (oEvent.getId() == "liveChange") {
            //           sQuery = oEvent.getParameter("query");
            //       }

            //       if (sQuery) {
            //           var oFilter1 = new Filter("Name", "EQ", sQuery);
            //           var oFilter2 = new Filter("Zemprole", "EQ", sQuery);
            //           var oFilter3 = new Filter("Zgender", "EQ", sQuery);
            //           var oFilter4 = new Filter("Znumber", "EQ", sQuery);
            //           var oFilter5 = new Filter("Zcity", "EQ", sQuery);

            //           var aFilter = new Filter([oFilter1, oFilter2, oFilter3, oFilter4, oFilter5]);
            //       }

            //       oBinding.filter(aFilter);
            //   },
        });
    });
