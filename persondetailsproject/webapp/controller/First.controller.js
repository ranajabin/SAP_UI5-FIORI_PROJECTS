sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("person.persondetailsproject.controller.First", {
            onInit: function () {

            },

            // navigate into the Login page
            onPress: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                // sap.m.MessageToast.show("Logout Successful!");
                router.navTo("Login");
            }
        });
    });

