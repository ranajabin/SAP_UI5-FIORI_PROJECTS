sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("countdown.countdownimerproject.controller.covid.List", {

            dataPath: "https://api.rootnet.in/covid19-in/stats/latest",

            onInit: function () {

                var dataModel = new JSONModel(this.dataPath);
                this.getView().setModel(dataModel, "Latest");

            },

            onNavBack: function () {
                history.go(-1);
            }

        });
    });
