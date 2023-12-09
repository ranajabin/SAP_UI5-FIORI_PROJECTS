sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("calc.simplecalculator.controller.View1", {
            onInit: function () {
                var mymodel = {
                    "oprnd1": "1",
                    "oprnd2": "2",
                    "oprtr": '',
                    "result": '',
                    "aselect": [
                        { "keyy": "+" },
                        { "keyy": "-" },
                        { "keyy": "*" },
                        { "keyy": "/" }
                    ]
                }

                var oModel = new sap.ui.model.json.JSONModel(mymodel);
                this.getView().setModel(oModel);

            },

            calculateResult: function () {
                var sModel = this.getView().getModel();
                var operand1 = parseInt(sModel.getProperty("/oprnd1"), 10);
                var operand2 = parseInt(sModel.getProperty("/oprnd2"), 10);
                var operator = sModel.getProperty("/oprtr");
                var iResult = 0;

                switch (operator) {
                    case "+":
                        iResult = operand1 + operand2; break;
                    case "-":
                        iResult = operand1 - operand2; break;
                    case "*":
                        iResult = operand1 * operand2; break;
                    case "/":
                        iResult = operand1 / operand2; break;
                }
                sModel.setProperty("/result", iResult);
            },

            // formatResult: function(iResult) {
            //     var oBundle = this.getView().getModel("i18n").getResourceBundle(),
            //         sResult = oBundle.getText("appResult", [iResult]);
            //     if(iResult)
            //        return sResult;
            //     return "";
            // }
        });
    });
