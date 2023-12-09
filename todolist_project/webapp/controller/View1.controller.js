sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, Fragment, JSONModel) {
        "use strict";

        return Controller.extend("todo.todolistproject.controller.View1", {
            formatter: formatter,
            onInit: function () {

            },

            setToComplete: function (oEvent) {
                var context = oEvent.getSource().getBindingContext("mTodo");
                var oModel = this.getView().getModel("mTodo");

                oModel.setProperty("status", "1", context);
            },

            createTodo: function () {
                var oData = {
                    title: "",
                    description: "",
                    targetDate: new Date("07/21/2023"),
                    status: 0
                };
                if (!this.createDialog) {
                    this.createDialog = Fragment.load({
                        type: "XML",
                        name: "todo.todolistproject.fragment.fragment1",
                        controller: this
                    }).then(function (oDialog) {
                        oDialog.setModel(new JSONModel(oData), "mCreate");
                        this.getView().addDependent(oDialog);
                        return oDialog;
                    }.bind(this))
                }
                this.createDialog.then(function (oDialog) {
                    oDialog.open();
                    oDialog.getModel("mCreate").setData(oData);
                });
            },
            
            saveToDo: function () {
                var oTodoModel = this.getView().getModel("mTodo"),
                    aData = oTodoModel.getData();
                this.createDialog.then(function (oDialog) {
                    var oData = oDialog.getModel("mCreate").getData();
                    aData.todo_list.unshift(oData);
                    oTodoModel.setData(aData);
                    oDialog.close();
                });
            },

            DeleteTodo: function (oEvt) {
                var oSource = oEvt.getParameter("listItem"),
                    oContext = oSource.getBindingContext("mTodo"),
                    mTodo = this.getView().getModel("mTodo");
                var aData = this.getView().getModel("mTodo").getData(),
                    sPath = oContext.getPath(),
                    iIndex = sPath.split('/')[2];
                aData.todo_list.splice(iIndex, 1);
                mTodo.setData(aData);
            }
        });
    });
