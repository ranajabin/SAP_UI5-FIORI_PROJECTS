sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var string = "";

        return Controller.extend("calc.mycalculator.controller.View1", {
            onInit: function () {

            },

            onpress_btn: function (value) {
                debugger;
                var t = this;

                string = string + value;
                t.getView().byId('_idinpt').setValue(string);

            },

            clearDisplay: function () {
                debugger;
                var t = this;
                t.getView().byId('_idinpt').setValue('');
                string = "";
            },

            calculateResult: function () {
                debugger;
                var t = this;
                try {
                    var result = eval(t.getView().byId('_idinpt').getValue());
                    t.getView().byId('_idinpt').setValue(result);
                    string = result;
                } catch (error) {
                    t.getView().byId('_idinpt').setValue('Error');
                }
            }
        });
    });








