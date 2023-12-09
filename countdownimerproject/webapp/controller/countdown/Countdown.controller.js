sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("countdown.countdownimerproject.controller.countdown.Countdown", {
            onInit: function () {
                this.timer = {
                    "days": 0,
                    "hours": 0,
                    "minutes": 0,
                    "seconds": 0
                }

                var myTilesModel = new sap.ui.model.json.JSONModel(this.timer);
                this.getView().setModel(myTilesModel, "timer");

                setInterval(this.CalculateTime.bind(this), 1000);
            },

            CalculateTime: function () {
                debugger;

                var saptecheddate = Date.parse(new Date("Dec 8 2020"));
                var currentdate = Date.parse(new Date());

                var diff = Date.parse(new Date()) - Date.parse(new Date("02/01/2023"));
                // var diff = currentdate.getTime() - saptecheddate.getTime();
                // var diff = currentdate - saptecheddate;

                this.timer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
                this.timer.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.timer.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                this.timer.seconds = Math.floor((diff % (1000 * 60)) / (1000));

                this.getView().getModel("timer").setData(this.timer);
            },

            // press: function(oRoute) {
            //     alert(oRoute);
            // }
        });
    });
