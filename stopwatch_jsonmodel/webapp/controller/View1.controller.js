sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
   "use strict";

   return Controller.extend("watch.stopwatch.controller.View1", {
      onInit: function () {
         // Create a JSON model for the stopwatch time
         var oModel = new JSONModel({
            time: "00:00:00"
         });
         this.getView().setModel(oModel, "stopwatchModel");

         // Initialize variables
         this.startTime = 0;
         this.running = false;
      },

      onStartPress: function () {
         if (!this.running) {
            this.startTime = new Date().getTime();
            this.running = true;
            this.updateTime();
         }
      },

      onStopPress: function () {
         this.running = false;
         //  this.getView().getModel("stopwatchModel").setProperty("/time", "00:00:00");
      },

      onResetPress: function () {
         this.running = false;
         this.getView().getModel("stopwatchModel").setProperty("/time", "00:00:00");
         this.updateTime();

      },

      updateTime: function () {
         if (this.running) {
            var currentTime = new Date().getTime();
            var elapsedTime = currentTime - this.startTime;
            var seconds = Math.floor(elapsedTime / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);

            seconds %= 60;
            minutes %= 60;
            hours %= 24;

            // Format the time and update the model
            var formattedTime = this.formatTime(hours) + ":" + this.formatTime(minutes) + ":" + this.formatTime(seconds);
            this.getView().getModel("stopwatchModel").setProperty("/time", formattedTime);

            // Update time every second
            setTimeout(this.updateTime.bind(this), 1000);
         }
      },

      formatTime: function (value) {
         return value < 10 ? "0" + value : value;
      }
   });
});
