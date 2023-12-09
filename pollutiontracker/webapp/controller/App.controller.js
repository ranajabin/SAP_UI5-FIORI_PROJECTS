// sap.ui.define(
//     [
//         "sap/ui/core/mvc/Controller"
//     ],
//     function(BaseController) {
//       "use strict";

//       return BaseController.extend("pollution.pollutiontracker.controller.App", {
//         onInit() {
//         }
//       });
//     }
//   );


sap.ui.define(
  [
    "sap/ui/core/mvc/Controller"
  ],
  // function (BaseController) {
  function (Controller) {
    "use strict";

    // return BaseController.extend("flexiblelayout.flexiblelayoutableproject.controller.App", {
    return Controller.extend("pollution.pollutiontrackert.controller.App", {
      onInit() {
        // var t =  this;
        this.oOwnerComponent = this.getOwnerComponent();
        this.oRouter = this.oOwnerComponent.getRouter();
        this.oRouter.attachRouteMatched(this.onRouteMatched, this);

      },

      onRouteMatched: function (evt) {

        debugger;

        var sRouteName = evt.getParameter("name");
        var oArguments = evt.getParameter("arguments");

        this._updateUIElements();

        // Save the current route name
        this.currentRouteName = sRouteName;
        this.chosenCountry = oArguments.country;
        // this.currentSupplier = oArguments.supplier;
      },


      onStateChanged: function (oEvent) {
        var bIsNavigationArrow = oEvent.getParameter("isNavigationArrow"),
          sLayout = oEvent.getParameter("layout");

        this._updateUIElements();

        // Replace the URL with the new layout if a navigation arrow was used
        if (bIsNavigationArrow) {
          // this.oRouter.navTo(this.currentRouteName, { Id: "X", layout: sLayout }, true);
          this.oRouter.navTo(this.currentRouteName, { layout: sLayout, country: this.chosenCountry }, true);
        }
      },

      // Update the close/fullscreen buttons visibility
      _updateUIElements: function () {
        var oModel = this.oOwnerComponent.getModel(),
          oUIState;
        this.oOwnerComponent.getHelper().then(function (oHelper) {
          oUIState = oHelper.getCurrentUIState();
          oModel.setData(oUIState);
        });
      },
    });
  }
);
