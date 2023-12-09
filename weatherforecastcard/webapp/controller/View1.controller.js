sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("cardproject.weatherforecastcard.controller.View1", {
            onInit: function () {

                var weatherdata = new sap.ui.model.json.JSONModel("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}");
                this.getView().setModel(weatherdata);

            },

            onSelectingWeatherOption: function (oEvent) {
                debugger
                var selVal = oEvent.getSource().getSelectedButton().getText();

                switch (selVal) {
                    case "Current Object Card":
                        break;
                    case "Minutely List Card":
                        break;
                    case "Hourly Table Card":
                        break;
                    case "daily Analytical Card":
                        break;
                }
            }
        });
    });
