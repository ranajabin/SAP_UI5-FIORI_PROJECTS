sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        this.timer = null;
        this.second = 0;
        this.minute = 0;
        this.hour = 0;

        return Controller.extend("watch.stopwatch.controller.View1", {
            onInit: function () {

            },

            onPressStopwatch: function () {
                // debugger;
                // var that = this;

                this.second++;
                if (this.second == 60) {
                    this.minute = minute + 1;
                    this.second = 0;
                    if (this.minute == 60) {
                        this.hour = this.hour + 1;
                        this.minute = 0;
                    }
                }

                let h = this.hour < 10 ? "0" + this.hour : this.hours;
                let m = this.minute < 10 ? "0" + this.minute : this.minute;
                let s = this.second < 10 ? "0" + this.second : this.second;

                sap.ui.getCore().byId("timer").setText(h + ":" + m + ":" + s);
                // this.getView().byId("timer").setText(h + ":" + m + ":" + s);

            },

            onPressPlay: function () {
                // debugger;

                if (this.timer != null) {
                    clearInterval(this.timer);
                }
                this.timer = setInterval(this.onPressStopwatch, 1000);
            },

            onPressStop: function () {
                clearInterval(this.timer);
            },

            onPressReset: function () {
                clearInterval(this.timer);
                this.hour, this.minute, this.second = 0;
                sap.ui.getCore().byId("_idlbl").setText("00" + ":" + "00" + ":" + "00");
            }
        });
    });
