sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        this.timer = false;

        return Controller.extend("watch.stopwatchh.controller.View1", {
            onInit: function () {

                // Create a JSON model for the stopwatch time
                // var oModel = new JSONModel({
                //     time: "00:00:00"
                // });

                // this.getView().setModel(oModel, "stopwatchModel");

                this.second = 0;
                this.minute = 0;
                this.hour = 0;
            },

            onPressStopwatch: function () {

                this.second = this.second + 1;
                if (this.second == 60) {
                    this.minute = this.minute + 1;
                    this.second = 0;
                    if (this.minute == 60) {
                        this.hour = this.hour + 1;
                        this.minute = 0;
                    }
                }

                let h = this.hour < 10 ? "0" + this.hour : this.hour;
                let m = this.minute < 10 ? "0" + this.minute : this.minute;
                let s = this.second < 10 ? "0" + this.second : this.second;

                // var formattedTime = h + ":" + m + ":" + s;
                // this.getView().getModel("stopwatchModel").setProperty("/time", formattedTime);

                this.getView().byId("timer").setText(h + ":" + m + ":" + s);

            },

            onPressPlay: function () {

                if (this.timer != false) {
                    clearInterval(this.timer);
                }
                this.timer = setInterval(this.onPressStopwatch.bind(this), 1000);

                // this.timer =  setTimeout(this.onPressStopwatch.bind(this), 1000);
            },

            onPressStop: function () {
                clearInterval(this.timer);
            },

            onPressReset: function () {
                clearInterval(this.timer);
                this.hour, this.minute, this.second = 0;
                this.getView().byId("timer").setText("00" + ":" + "00" + ":" + "00");

                // var modeldata = this.getView().getModel("stopwatchModel");
                // modeldata.setProperty("/time",  "00:00:00");
            }
        });
    });
