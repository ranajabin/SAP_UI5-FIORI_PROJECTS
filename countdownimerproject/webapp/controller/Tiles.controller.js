sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("countdown.countdownimerproject.controller.Tiles", {
            onInit: function () {
            //   this.getOwnerComponent.getRouterFor(this).navTo();
            var myTilesModel = new sap.ui.model.json.JSONModel("../model/Tiles.json");
             this.getView().setModel(myTilesModel, "Tiles");
            },

            press: function(oRoute) {
                // alert(oRoute);
                // var router =  sap.ui.core.UIComponent.getRouterFor(this);
                // router.navTo(oRoute);

                debugger;
                if(oRoute.substring(0, 4) == "Ext-") {

                let selItem = JSON.parse(this.getView().getModel("Tiles").getJSON()).find(item => {if (item.route == oRoute){ return item; }});
                // let selItem = JSON.parse(this.getView().getModel("Tiles").getJSON())[3];
                 sap.m.URLHelper.redirect(selItem.url, false);   
            } else{        
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }}
        });
    });
