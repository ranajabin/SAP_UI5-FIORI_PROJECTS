sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/core/date/UI5Date"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox, UI5Date) {
        "use strict";

        return Controller.extend("calendar.planningcalendar.controller.View1", {
            onInit: function () {
                var currentDate = new Date();
                var oData = {
                    startDate: new Date(),
                    rows: [{
                        startDate: new Date(),
                        appointments: [{
                            startDate: new Date(),
                            endDate: new Date(currentDate.getTime() + (3 * 60 * 60 * 1000)),
                            title: "Meeting with SAP",
                            text: "Discuss project status",
                            type: "Type01",
                            pic: "sap-icon://sap-ui5",
                        }]
                    }]
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

            handleAppointmentSelect: function (oEvent) {
                var oAppointment = oEvent.getParameter("appointment"),
                    sSelected;
                if (oAppointment) {
                    sSelected = oAppointment.getSelected() ? "selected" : "deselected";
                    MessageBox.show("'" + oAppointment.getTitle() + "' " + sSelected);
                } else {
                    var aAppointments = oEvent.getParameter("appointments");
                    var sValue = aAppointments.length + " Appointments selected";
                    MessageBox.show(sValue);
                }
            },

            onPressBlock: function (oEvent) {
                var currentDate = new Date();
                var oData = {
                    startDate: new Date(),
                    rows: [{
                        startDate: new Date(),
                        appointments: [{
                            startDate: new Date(),
                            endDate: new Date(currentDate.getTime() + (3 * 60 * 60 * 1000)),
                            title: "Meeting with SAP",
                            text: "Discuss project status",
                            type: "Type01",
                            pic: "sap-icon://sap-ui5",
                        }, {
                            startDate: new Date(currentDate.getTime() + (3 * 60 * 60 * 1000)),
                            endDate: new Date(currentDate.getTime() + (6 * 60 * 60 * 1000)),
                            title: "Next Meeting with SAP",
                            text: "Discuss Next Meeting",
                            type: "Type02",
                            pic: "sap-icon://sap-ui5",
                            tentative: false
                        }]
                    }]
                };

                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            }
        });
    });
