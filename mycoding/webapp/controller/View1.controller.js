sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";
        // var busyIndicator = sap.ui.core.BusyIndicator;
        return Controller.extend("Coding.mycoding.controller.View1", {
            onInit: function () {

                // var busyIndicator = sap.ui.core.BusyIndicator;

                // busyIndicator.show(0);

                var oBusyDialog  = new sap.m.BusyDialog({
                    title : "Loading Your Data",
                    text : "Please wait...",

                });
                oBusyDialog.open();

                var oModel = new sap.ui.model.json.JSONModel("../model/Candidate.json");
                this.getView().setModel(oModel, "Table1");

                setTimeout(function () {
                    oBusyDialog.close();
                    }, 1000);
    

                // setTimeout(function () {
                //     busyIndicator.hide();
                // }, 1000);

            },

            onSliderMoved: function (oEvent) {
                var iValue = oEvent.getParameter("value");
                this.byId("otbSubheader").setWidth(iValue + "%");
                this.byId("otbFooter").setWidth(iValue + "%");
            },

            onSaveAsTileOpen: function () {
                MessageToast.show("SaveAsTile Dialog was opened", { duration: 3000 });
            },
            onSaveAsTileClose: function () {
                MessageToast.show("SaveAsTile Dialog was closed", { duration: 3000 });
            },

            // onLoadDialog: function () {
            //     debugger;
            //     if (!this.pDialog) {
            //         this.pDialog = this.loadFragment({
            //             name: "Coding.mycoding.fragments.fragment1"
            //         });
            //     }

            //     this.pDialog.then(function (oDialog) {
            //         oDialog.open();
            //     });
            // },

            // handleCloseDialog: function () {
            //     this.byId("pDialog").close();
            // },

            // handleSaveDialog: function () {
            //     this.byId("pDialog").close();
            // },


            onLoadDialog: function (oEvent) {

                var myView = this.getView();
                this._oDialog = myView.byId("pDialog");
                if (!this._oDialog) {

                    this._oDialog = sap.ui.xmlfragment(myView.getId(), "Coding.mycoding.fragments.fragment1", this);
                    myView.addDependent(this._oDialog);
                    this._oDialog.open();

                }
                else {
                    this.byId("pDialog").open();
                }

            },

            handleCloseDialog: function () {
                this.byId("pDialog").close();
            },

            handleSaveDialog: function (oEvent) {
                debugger;
                var that = this;
                var packagename = that.getView().byId("_idpkg").getValue();
                // var dbscheck = that.getView().byId("_iddbs").getText();
                // var dbscheck = that.getView().byId("_iddbs")._oSelectionOnFocus.mProperties.text;
                var dbscheck = that.getView().byId("_iddbs").mProperties.value;
                // var financialcheck = that.getView().byId("_idcredit").getSelected();
                // var righttoworkcheck = that.getView().byId("_idright").getSelected();
                var workhistorycheck = that.getView().byId("_idhistory").getValue();

                // var array = { packagename, dbscheck, financialcheck, righttoworkcheck, workhistorycheck };


                var array = { packagename, dbscheck, workhistorycheck };


                var sData = oEvent.getSource().getModel("Table1").getData();

                // sData.candidatedetails.financialcheck.setSelected(true);
                sData.candidatedetails.push(array);

                that.getView().getModel("Table1").setData(sData);

                MessageBox.success("Data Added Successfully!");

                that.getView().byId("_idpkg").setValue("");
                that.getView().byId("_idhistory").setValue("");
                // that.getView().byId("_iddbs").mProperties.value = "";
                that.getView().byId("_iddbs").setValue("Select");
                that.getView().byId("_idcredit").setSelected(false);
                that.getView().byId("_idright").setSelected(false);

                that.byId("pDialog").close();
            },

            onCheckBoxSelect: function (oEvent) {
                debugger;
                // var oCheckBox = oEvent.getSource(); 
                var financialcheck = this.getView().byId("_idcredit").getSelected();
                if (financialcheck === true) {
                    this.getView().byId("_idcredit1").setSelected(true);
                } else {
                    this.getView().byId("_idcredit1").setSelected(false);
                }
                // oCheckBox.setSelected(true);
            },

            onCheckBoxSelect1: function (oEvent) {
                // var oCheckBox = oEvent.getSource(); 
                var righttoworkcheck = this.getView().byId("_idright").getSelected();

                if (righttoworkcheck === true) {
                    this.getView().byId("_idright1").setSelected(true);
                } else {
                    this.getView().byId("_idright1").setSelected(false);
                }
                // oCheckBox.setSelected(true);
            },

            onFilterSearch: function (oEvent) {
                debugger;

                var sQuery = oEvent.getParameter("query"),
                    oTable = this.getView().byId("table1"),
                    oBinding = oTable.getBinding("items");

                if (oEvent.getId() == "liveChange") {
                    sQuery = oEvent.getParameter("query");
                }
                if (sQuery) {
                    var oFilter1 = new sap.ui.model.Filter('packagename', 'Contains', sQuery);

                    var aFilter = new sap.ui.model.Filter([oFilter1]);
                    // var aFilter = new sap.ui.model.Filter([oFilter1]);
                }
                oBinding.filter(aFilter);
            },

            handleDeleteStatement: function (oEvent) {
                var that = this;
                var sData = oEvent.getSource().getModel("Table1").getData();
                var pathvalue = oEvent.oSource.oParent.oPropagatedProperties.oBindingContexts.Table1.sPath.slice(18);

                // sData.candidatedetails.splice(pathvalue, 1); // short form to del any row data

                // 2nd method
                let oCurrentcandidate = that.getView().getModel("Table1").getData().candidatedetails[pathvalue].packagename;

                for (var i = 0; i < sData.candidatedetails.length; i++) {
                    if (oCurrentcandidate === sData.candidatedetails[i].packagename)
                        sData.candidatedetails.splice(i, 1);
                    // break;
                }

                that.getView().getModel("Table1").setData(sData);
            },

            // handleEditStatement: function() {
            //     var that = this;
            //     var sData = oEvent.getSource().getModel("Table1").getData();
            //     var pathvalue = oEvent.oSource.oParent.oPropagatedProperties.oBindingContexts.Table1.sPath.slice(18);

            // }

        });
    });
