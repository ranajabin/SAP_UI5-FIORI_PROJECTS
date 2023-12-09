sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("countdown.countdownimerproject.controller.vaccination.Vacc", {
            onInit: function () {
                var myVaccModel = new sap.ui.model.json.JSONModel("../model/vacc.json");
                this.getView().setModel(myVaccModel, "vacc");

                let myViewConfig = {
                    "table": true,
                    "calendar": false
                }

                var myViewModel = new sap.ui.model.json.JSONModel(myViewConfig);
                this.getView().setModel(myViewModel, "view");

            },

            formatDate: function (input) {
                debugger;
                return new Date(input);
            },

            formatState: function (input) {
                let currentDate = new Date();
                let inputDate = new Date(input);

                if (inputDate < currentDate) {
                    return 'Success';
                }
                else if (inputDate > currentDate) {
                    return 'Warning';
                }
                else {
                    return 'Error';
                }
            },

            formatStateType: function (input) {

                if (input === "Injectible") {
                    return 'Success';
                }
                else if (input === "Oral") {
                    return 'Warning';
                }
                else {
                    return 'Error';
                }
            },

            onPressBack: function() {
               history.go(-1);
            },
            // press: function(oRoute) {
            //     alert(oRoute);
            // }
        });
    });
