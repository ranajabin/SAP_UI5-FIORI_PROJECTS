sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        this.x = false;

        return Controller.extend("otp.otpexpirecountdown.controller.View1", {
            onInit: function () {

                var time = this.getView().byId("timer");
                var fiveMinutesLater = new Date();
                var scs = fiveMinutesLater.setMinutes(fiveMinutesLater.getMinutes() + 5);
                console.log(scs);
                var countdowntime = scs;

                this.x = setInterval(function () {
                    var now = new Date().getTime();
                    var cTime = countdowntime - now;
                    var minutes = Math.floor((cTime % (1000 * 60 * 60)) / (1000 * 60));
                    var second = Math.floor((cTime % (1000 * 60)) / 1000);
                    time.setText("OTP Expires in " + minutes + ":" + second + " Minutes");

                    if (cTime < 0) {
                        clearInterval(x);
                        time.setText("OTP Expires in 0:0 Minutes");
                    }
                });
            },

            onPressButton: function () {
                var that = this;
                clearInterval(this.x);
                that.getView().byId("timer").setText("OTP Expires in 00:00 Minutes");
                that.byId("_idnum").setValue("");
                that.byId("_idnum").setEditable(false);

                sap.m.MessageToast.show("OTP Confirmed!");
            }
        });
    });
