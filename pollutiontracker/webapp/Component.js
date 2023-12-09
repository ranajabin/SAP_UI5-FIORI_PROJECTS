// /**
//  * eslint-disable @sap/ui5-jsdocs/no-jsdoc
//  */

// sap.ui.define([
//         "sap/ui/core/UIComponent",
//         "sap/ui/Device",
//         "pollution/pollutiontracker/model/models"
//     ],
//     function (UIComponent, Device, models) {
//         "use strict";

//         return UIComponent.extend("pollution.pollutiontracker.Component", {
//             metadata: {
//                 manifest: "json"
//             },

//             /**
//              * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
//              * @public
//              * @override
//              */
//             init: function () {
//                 // call the base component's init function
//                 UIComponent.prototype.init.apply(this, arguments);

//                 // enable routing
//                 this.getRouter().initialize();

//                 // set the device model
//                 this.setModel(models.createDeviceModel(), "device");
//             }
//         });
//     }
// );

/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "pollution/pollutiontracker/model/models",
    'sap/f/FlexibleColumnLayoutSemanticHelper',
    'sap/f/library'

],
    // "pollution.pollutiontracker/model/models",
    function (UIComponent, Device, models, FlexibleColumnLayoutSemanticHelper, fioriLibrary) {
        "use strict";

        return UIComponent.extend("pollution.pollutiontracker.Component", {
            // metadata: {
            //     manifest: "json"
            // },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function

                var oModel,
                    oRouter;

                UIComponent.prototype.init.apply(this, arguments);

                oModel = new sap.ui.model.json.JSONModel();
                this.setModel(oModel);

                oRouter = this.getRouter();
                oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
                oRouter.initialize();

                // enable routing
                // this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },

            getHelper: function () {
                return this._getFcl().then(function (oFCL) {
                    var oSettings = {
                        defaultTwoColumnLayoutType: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
                        defaultThreeColumnLayoutType: fioriLibrary.LayoutType.ThreeColumnsMidExpanded
                    };
                    return (FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings));
                });
            },

            _onBeforeRouteMatched: function (oEvent) {
                var oModel = this.getModel(),
                    sLayout = oEvent.getParameters().arguments.layout,
                    oNextUIState;

                // If there is no layout parameter, query for the default level 0 layout (normally OneColumn)
                if (!sLayout) {
                    this.getHelper().then(function (oHelper) {
                        oNextUIState = oHelper.getNextUIState(0);
                        oModel.setProperty("/layout", oNextUIState.layout);
                    });
                    return;
                }

                oModel.setProperty("/layout", sLayout);
            },

            _getFcl: function () {
                return new Promise(function (resolve, reject) {
                    var oFCL = this.getRootControl().byId('_idpollution');
                    if (!oFCL) {
                        this.getRootControl().attachAfterInit(function (oEvent) {
                            resolve(oEvent.getSource().byId('_idpollution'));
                        }, this);
                        return;
                    }

                    resolve(oFCL);
                }.bind(this));
            }
        });
    });
