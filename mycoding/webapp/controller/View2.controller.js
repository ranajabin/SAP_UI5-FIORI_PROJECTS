sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("Coding.mycoding.controller.View2", {
            onInit: function () {
                 //For Everytime different value
                 this.gicandidateId = 0;

                 // student is var which is declared global
                 this.candidate = {
                     id: this.gicandidateId,
                     packagename: "",
                     dbscheck: "",
                     creditcheck: "",
                     righttoworkcheck: "",
                     workhistorycheck: ""
                 };
                 // global var for sending that data into model(model which has been binded in the view)
                 this.data = {
                     candidates: [],
                     candidate: this.candidate
                 };

            },

            onAfterRendering: function () {
                var oModel = new sap.ui.model.json.JSONModel(this.data);
                this.getView().setModel(oModel);
            },


            // handleAddStudent: function (oEvent) {
            //     debugger;
            //     if (!this.newCandidateDialog) {

            //         // To read the fragment & open a dialogbox(this is a global var, which can be accessed anywhere in this particular controller)
            //         // this.newStudentDialog = sap.ui.xmlfragment("localdataproject2.localdatacrudoperationproject2.fragments.fragment1", this);

            //         // This binding is to set data in dialog box
            //         var oModel = new sap.ui.model.json.JSONModel();
            //         this.newCandidateDialog.setModel(oModel);

            //     }
            //     this.candidate.id = this.giCandidateId;
            //     var data = JSON.parse(JSON.stringify(this.candidate));
            //     // This binding is to set data in view
            //     this.newCandidateDialog.getModel().setData(data);
            //     // this.newStudentDialog.open();
            // },

            handleSaveDialog: function (oEvent) {
                //get the model
                var oModel = oEvent.getSource().getModel();
                //get the data from model
                var oDialogData = oModel.getData();
                var oViewData = this.getView().getModel().getData();
                
                oViewData.candidates.push(oDialogData);
                this.getView().getModel().setData(oViewData);
                // For storing everytime different value
                this.giCandidateId++;
                this.byId("pDialog").close();
                // this.newCandidateDialog.close();
            },


            onLoadDialog: function () {
                debugger;
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "Coding.mycoding.fragments.fragment1"
                    });
                    // var oModel = new sap.ui.model.json.JSONModel();
                    // // this.newCandidateDialog.setModel(oModel);
                    // this.pDialog.setModel(oModel);
                }
                
                this.pDialog.then(function (oDialog) {

                    this.candidate.id = this.giCandidateId;
                    var data = JSON.parse(JSON.stringify(this.candidate));
                    // This binding is to set data in view
                    this.newCandidateDialog.getModel().setData(data);
                    oDialog.open();
                });
            },

            handleCloseDialog: function () {
                this.byId("pDialog").close();
            },

            // handleSaveDialog: function () {
            //     this.byId("pDialog").close();
            // },
        });
    });
