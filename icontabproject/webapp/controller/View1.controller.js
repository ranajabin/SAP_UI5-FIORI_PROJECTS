sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("Icontab.icontabproject.controller.View1", {
            onInit: function () {
            },

            onpress: function () {
                debugger;

                var Employee =
                    [
                        {
                            "FirstName": "John",
                            "MiddleName": "Doe",
                            "LastName": "Singh",
                            "NickName": "Kumar",
                            "MaritalStatus": "Single",
                            "DateofBirth": "01-02-1990",
                            "AddressLine1": "Patna",
                            "AddressLine2": "Pune",
                            "City": "Kurnool",
                            "State": "Karnataka",
                            "ZipCode": "10000893",
                            "Member": "04",
                            "Mobile": "90883848834",
                            "TaxAuthority": "ABC",
                            "SSN": "93894999",
                            "Allowances": "9834",
                            "Exempt": "3477",
                            "AdditionalWithholding": "67890",
                            "FillingStatus": "Completed",
                            "BankType": "Saving Account",
                            "RoutingNum": "2345",
                            "AccountNum": "343434",
                            "Amount": "38434343",
                            "Percent": "30",
                            "Email": "ABC@example.com",
                            "HomePhone": "8899389439",
                            "Workemail": "XYZ@example.com",
                            "DeskPhone": "+31 23 453 3431",
                            "Username": "ABC_123",
                            "FunctionalArea": "Development",
                            "Department": "SAP ABAP",
                            "Password": "123",
                            "Icon": "https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png"
                        },
                        {
                            "FirstName": "Sia",
                            "MiddleName": "Singh",
                            "LastName": "Kumari",
                            "NickName": "Sandy",
                            "MaritalStatus": "Single",
                            "DateofBirth": "09-04-1992",
                            "AddressLine1": "Punjab",
                            "AddressLine2": "Pune",
                            "City": "Kurnool",
                            "State": "Pune",
                            "ZipCode": "23232893",
                            "Member": "02",
                            "Mobile": "9223223223",
                            "TaxAuthority": "CBA",
                            "SSN": "2323232",
                            "Allowances": "3422",
                            "Exempt": "6555",
                            "AdditionalWithholding": "67666",
                            "FillingStatus": "Process",
                            "BankType": "Current Account",
                            "RoutingNum": "3425",
                            "AccountNum": "653434",
                            "Amount": "76734343",
                            "Percent": "80",
                            "Email": "ASD@example.com",
                            "HomePhone": "90845389439",
                            "Workemail": "SDF@example.com",
                            "DeskPhone": "+42 23 453 9855",
                            "Username": "ASD_345",
                            "FunctionalArea": "Tester",
                            "Department": "SAP Fiori",
                            "Password": "345",
                            "Icon": "https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png"
                        },
                        {
                            "FirstName": "Sunny",
                            "MiddleName": "Pratap",
                            "LastName": "Singh",
                            "NickName": "Sonu",
                            "MaritalStatus": "Single",
                            "DateofBirth": "03-02-1990",
                            "AddressLine1": "Lucknow",
                            "AddressLine2": "Punjab",
                            "City": "Kurnool",
                            "State": "Andhra Pradesh",
                            "ZipCode": "34000893",
                            "Member": "05",
                            "Mobile": "97483848834",
                            "TaxAuthority": "XYZ",
                            "SSN": "93894999",
                            "Allowances": "9834",
                            "Exempt": "3477",
                            "AdditionalWithholding": "67890",
                            "FillingStatus": "Completed",
                            "BankType": "Saving Account",
                            "RoutingNum": "2345",
                            "AccountNum": "343434",
                            "Amount": "38434343",
                            "Percent": "30",
                            "Email": "XYZ@example.com",
                            "HomePhone": "8899389439",
                            "Workemail": "ABC@example.com",
                            "DeskPhone": "+21 32 466 3431",
                            "Username": "XYZ_987",
                            "FunctionalArea": "Trainee",
                            "Department": "SAP MM",
                            "Password": "987",
                            "Icon": "https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png"
                        }
                    ]

                var usernm = this.getView().byId("_iduser").getValue();
                var pass = this.getView().byId("_idpwd").getValue();

                if (usernm == '') {
                    this.getView().byId("_iduser").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_iduser").setValueState(sap.ui.core.ValueState.Success);
                }

                if (pass == '') {
                    this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Error);
                } else {
                    this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Success);
                }

                for (var i = 0; i < Employee.length; i++) {
                    if (usernm == '') {
                        MessageBox.error("Please Enter Username");
                        this.getView().byId("_iduser").setValueState(sap.ui.core.ValueState.Error);
                        return;
                    }
                    else if (pass == '') {
                        MessageBox.error("Please Enter Password!");
                        this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Error);
                        return;
                    }
                    else if (usernm === Employee[i].Username && pass === Employee[i].Password) {

                        var router = sap.ui.core.UIComponent.getRouterFor(this);
                        router.navTo("PersonalInformation", { Uname: usernm, password: pass });

                        var usernm = this.getView().byId("_iduser").setValue();
                        var pass = this.getView().byId("_idpwd").setValue();

                        MessageToast.show("Login Successful!");
                        return;
                    }

                }
                // else (usernm != Employee[i].Username && pass != Employee[i].Password) {
                //     this.getView().byId("_iduser").setValueState(sap.ui.core.ValueState.Error);
                //     this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Error);

                //     var usernm = this.getView().byId("_iduser").setValue();
                //     var pass = this.getView().byId("_idpwd").setValue();

                //     MessageBox.error("Invalid User!");
                //     return;
                // }
                for (var j = 0; j < Employee.length; i++) {
                    if (usernm != Employee[j].Username && pass != Employee[j].Password) {
                        this.getView().byId("_iduser").setValueState(sap.ui.core.ValueState.Error);
                        this.getView().byId("_idpwd").setValueState(sap.ui.core.ValueState.Error);

                        var usernm = this.getView().byId("_iduser").setValue();
                        var pass = this.getView().byId("_idpwd").setValue();

                        MessageBox.error("Invalid User!");
                        return;
                    }
                }
            }
        });
    });


