sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, FlattenedDataset, ChartFormatter, Format) {
        "use strict";

        return Controller.extend("countdown.countdownimerproject.controller.covid.Pie", {

            dataPath: "https://api.rootnet.in/covid19-in/stats/latest",
            oVizFrame: null,

            onInit: function () {
                Format.numericFormatter(ChartFormatter.getInstance());
                var formatPattern = ChartFormatter.DefaultPattern;

                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFramePie");
                oVizFrame.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            formatString: formatPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString: formatPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false,
                        text: 'Covid Cases Latest'
                    }
                });
                var dataModel = new JSONModel(this.dataPath);
                oVizFrame.setModel(dataModel, "Latest");

                var oPopOver = this.getView().byId("idPopOverPie");
                oPopOver.connect(oVizFrame.getVizUid());
                oPopOver.setFormatString(formatPattern.STANDARDFLOAT);


            },

            onNavBack: function () {
                history.go(-1);
            }
        });
    });
