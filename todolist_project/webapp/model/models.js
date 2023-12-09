sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },

        createToDoModel: function() {
            var oModel = new JSONModel({
                todo_list: [{
                    title: "Vide1",
                    description: "video 1 _desc",
                    targetDate: new Date("12/02/2023"),
                    status: 0
                },
                {
                    title: "Vide2",
                    description: "video 2 _desc",
                    targetDate: new Date("11/28/2023"),
                    status: 1
                },
                {
                    title: "Vide3",
                    description: "video 3 _desc",
                    targetDate: new Date("12/04/2023"),
                    status: 0
                }]
            });
            return oModel;
        }
    };
});