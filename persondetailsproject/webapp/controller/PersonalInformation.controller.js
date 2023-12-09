sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/library",
	"sap/ui/model/json/JSONModel",
	"sap/ui/layout/library",
	'sap/ui/core/date/UI5Date',
	"sap/ui/export/library",
	"sap/ui/export/Spreadsheet"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, mobileLibrary, JSONModel, layoutLibrary, UI5Date, exportLibrary, Spreadsheet) {
		"use strict";

		var URLHelper = mobileLibrary.URLHelper;
		var CellColorSet = layoutLibrary.BlockLayoutCellColorSet;
		var EdmType = exportLibrary.EdmType;

		return Controller.extend("person.persondetailsproject.controller.PersonalInformation", {
			onInit: function () {
				debugger;
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getRoute("PersonalInformation").attachPatternMatched(this.onRouteMatch, this);

				var oModel = new sap.ui.model.json.JSONModel("../model/deptandbeneficiary.json");
				this.getView().setModel(oModel, "dept");

				// Model to set data in color cell
				var oView = this.getView(),
					oModel = new JSONModel();

				oView.setModel(oModel);
				this._setModelData(this._modelData);

				// Calendar Code

				// create model
				var oModel = new JSONModel();
				oModel.setData({
					startDate: UI5Date.getInstance(2017, 0, 15, 8, 0),
					minDate: UI5Date.getInstance(2000, 0, 1, 0, 0, 0),
					maxDate: UI5Date.getInstance(2050, 11, 31, 23, 59, 59),
					people: [{
						pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
						name: "John Miller",
						role: "team member",
						appointments: [{
							start: UI5Date.getInstance(2016, 9, 20, 10, 0),
							end: UI5Date.getInstance(2016, 11, 15, 12, 0),
							title: "Working out of the building",
							type: "Type07",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 15, 8, 30),
							end: UI5Date.getInstance(2017, 0, 15, 9, 30),
							title: "Meeting with Max Mustermann",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 15, 10, 0),
							end: UI5Date.getInstance(2017, 0, 15, 12, 0),
							title: "Team meeting",
							info: "room 1",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 15, 11, 30),
							end: UI5Date.getInstance(2017, 0, 15, 13, 30),
							title: "Lunch",
							info: "canteen",
							type: "Type03",
							tentative: true
						},
						{
							start: UI5Date.getInstance(2017, 0, 15, 13, 30),
							end: UI5Date.getInstance(2017, 0, 15, 17, 30),
							title: "Discussion with clients",
							info: "online meeting",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 16, 0, 1),
							end: UI5Date.getInstance(2017, 0, 16, 23, 59),
							title: "Discussion",
							info: "Online meeting",
							type: "Type04",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 18, 8, 30),
							end: UI5Date.getInstance(2017, 0, 18, 9, 30),
							title: "Meeting with the manager",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 18, 11, 0),
							end: UI5Date.getInstance(2017, 0, 18, 13, 30),
							title: "Lunch",
							info: "canteen",
							type: "Type03",
							tentative: true
						},
						{
							start: UI5Date.getInstance(2017, 0, 18, 1, 0),
							end: UI5Date.getInstance(2017, 0, 18, 22, 0),
							title: "Team meeting",
							info: "regular",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 21, 0, 30),
							end: UI5Date.getInstance(2017, 0, 21, 23, 30),
							title: "New Product",
							info: "room 105",
							type: "Type03",
							tentative: true
						},
						{
							start: UI5Date.getInstance(2017, 0, 25, 11, 30),
							end: UI5Date.getInstance(2017, 0, 25, 13, 30),
							title: "Lunch",
							type: "Type03",
							tentative: true
						},
						{
							start: UI5Date.getInstance(2017, 0, 29, 10, 0),
							end: UI5Date.getInstance(2017, 0, 29, 12, 0),
							title: "Team meeting",
							info: "room 1",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 30, 8, 0),
							end: UI5Date.getInstance(2017, 0, 30, 9, 30),
							title: "Meet Max Mustermann",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 30, 10, 0),
							end: UI5Date.getInstance(2017, 0, 30, 12, 0),
							title: "Team meeting",
							info: "room 1",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 30, 11, 30),
							end: UI5Date.getInstance(2017, 0, 30, 13, 30),
							title: "Lunch",
							type: "Type03",
							tentative: true
						},
						{
							start: UI5Date.getInstance(2017, 0, 30, 13, 30),
							end: UI5Date.getInstance(2017, 0, 30, 17, 30),
							title: "Discussion with clients",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 31, 10, 0),
							end: UI5Date.getInstance(2017, 0, 31, 11, 30),
							title: "Discussion of the plan",
							info: "Online meeting",
							type: "Type04",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 1, 1, 1, 0),
							end: UI5Date.getInstance(2017, 1, 2, 22, 0),
							title: "Workshop",
							info: "regular",
							type: "Type07",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 1, 3, 8, 30),
							end: UI5Date.getInstance(2017, 1, 13, 9, 30),
							title: "Meeting with the manager",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 1, 4, 10, 0),
							end: UI5Date.getInstance(2017, 1, 4, 12, 0),
							title: "Team meeting",
							info: "room 1",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 2, 30, 10, 0),
							end: UI5Date.getInstance(2017, 4, 31, 12, 0),
							title: "Working out of the building",
							type: "Type07",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 8, 1, 0, 30),
							end: UI5Date.getInstance(2017, 10, 15, 23, 30),
							title: "Development of a new Product",
							info: "room 207",
							type: "Type03",
							tentative: true
						}
						]
					},
					{
						pic: "sap-icon://employee",
						name: "Max Mustermann",
						role: "team member",
						appointments: [{
							start: UI5Date.getInstance(2016, 7, 15, 10, 0),
							end: UI5Date.getInstance(2016, 8, 25, 12, 0),
							title: "Team collaboration",
							info: "room 1",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 15, 8, 30),
							end: UI5Date.getInstance(2017, 0, 15, 9, 30),
							title: "Meeting with John Miller",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 15, 10, 0),
							end: UI5Date.getInstance(2017, 0, 15, 12, 0),
							title: "Team meeting",
							info: "room 1",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 15, 13, 0),
							end: UI5Date.getInstance(2017, 0, 15, 16, 0),
							title: "Discussion with clients",
							info: "online",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 16, 0, 0),
							end: UI5Date.getInstance(2017, 0, 16, 23, 59),
							title: "Vacation",
							info: "out of office",
							type: "Type04",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 17, 1, 0),
							end: UI5Date.getInstance(2017, 0, 18, 22, 0),
							title: "Workshop",
							info: "regular",
							type: "Type07",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 19, 8, 30),
							end: UI5Date.getInstance(2017, 0, 19, 18, 30),
							title: "Meet John Miller",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 19, 0, 1),
							end: UI5Date.getInstance(2017, 0, 19, 23, 59),
							title: "Team meeting",
							info: "room 102",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 19, 7, 0),
							end: UI5Date.getInstance(2017, 0, 19, 17, 30),
							title: "Discussion with clients",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 20, 0, 0),
							end: UI5Date.getInstance(2017, 0, 20, 23, 59),
							title: "Vacation",
							info: "out of office",
							type: "Type04",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 0, 22, 7, 0),
							end: UI5Date.getInstance(2017, 0, 27, 17, 30),
							title: "Discussion with clients",
							info: "out of office",
							type: "Type02",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 1, 15, 10, 0),
							end: UI5Date.getInstance(2017, 2, 25, 12, 0),
							title: "Team collaboration",
							info: "room 1",
							type: "Type01",
							pic: "sap-icon://sap-ui5",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 2, 13, 9, 0),
							end: UI5Date.getInstance(2017, 3, 9, 10, 0),
							title: "Reminder",
							type: "Type06"
						},
						{
							start: UI5Date.getInstance(2017, 3, 10, 0, 0),
							end: UI5Date.getInstance(2017, 5, 16, 23, 59),
							title: "Vacation",
							info: "out of office",
							type: "Type04",
							tentative: false
						},
						{
							start: UI5Date.getInstance(2017, 7, 1, 0, 0),
							end: UI5Date.getInstance(2017, 9, 31, 23, 59),
							title: "New quarter",
							type: "Type10",
							tentative: false
						}
						]
					}
					]
				});
				this.getView().setModel(oModel);

				// End
			},

			// Check for the valid user login and password
			onRouteMatch: function (evt) {
				debugger;
				var Usrnm = evt.mParameters.arguments.Uname;
				var pass1 = evt.mParameters.arguments.password;

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
							"Relationship": "Brother",
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
							"Username": "johnsinghdoe_123",
							"FunctionalArea": "Development",
							"Department": "SAP ABAP",
							"Password": "123",
							"website": "Visit to My Blog",
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
							"Relationship": "Sister",
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
							"Username": "siasingh_345",
							"FunctionalArea": "Tester",
							"Department": "SAP Fiori",
							"Password": "345",
							"website": "Visit to My Blog",
							"Icon": "https://cdn.statically.io/img/www.mockofun.com/f=auto//wp-content/uploads/2019/12/circle-profile-pic.jpg"
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
							"Relationship": "Brother",
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
							"Username": "sunnypratap_987",
							"FunctionalArea": "Trainee",
							"Department": "SAP MM",
							"Password": "987",
							"website": "Visit to My Blog",
							"Icon": "https://i.pinimg.com/236x/f2/8f/02/f28f02407c099fb94a488c1e9af9cf3a.jpg"
						}
					]

				for (var i = 0; i < Employee.length; i++) {
					if (Usrnm === Employee[i].Username && pass1 === Employee[i].Password) {

						var array1 = [];
						array1.push(Employee[i]);
						var array2 = new sap.ui.model.json.JSONModel();
						array2.setData(array1);
						this.getView().setModel(array2, "Emp1");
					}
				}
			},

			// blocklayout cell color change code
			_modelData: {
				colorSet: CellColorSet.ColorSet5
			},

			// set model to change the color of cells
			_setModelData: function (oData) {
				debugger;
				var oModel = this.getView().getModel();
				oModel.setData(oData);
			},

			onNavBack: function () {
				history.go(-1);
			},

			// Function to press Logout button
			onPressLog: function () {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				// sap.m.MessageToast.show("Logout Successful!");
				router.navTo("Login");

				// history.go(-1);
			},

			onPressNext: function () {
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				router.navTo("RouteFirst");
			},

			// Function to send the email 
			handleEmailPress: function (evt) {
				sap.m.URLHelper.triggerEmail(evt, "SUBJECT");
			},

			// Function to call any person by using the number
			handleTelPress: function (evt) {
				debugger;
				sap.m.URLHelper.triggerTel(evt);
			},

			//Function to open any link/website
			handleWebPress: function (evt) {
				debugger;
				URLHelper.redirect("https://www.google.com/", true);
			},

			// Function to contact on fb account 
			onclickfb: function () {
				var link = "https://www.facebook.com/"
				window.location.href = link;
			},

			// Function to contact on Instagram account
			onclickinsta: function () {
				var link = "https://www.instagram.com/accounts/login/"
				window.open(link);
			},

			// Function to contact on twitter account
			onclicktwitter: function () {
				var link = "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
				sap.m.URLHelper.redirect(link, true);
			},

			// Search functionality of Table data
			onFilterSearch: function (oEvent) {
				debugger;

				var sQuery = oEvent.getParameter("query"),
					oTable = this.getView().byId("table1"),
					oBinding = oTable.getBinding("items");

				if (oEvent.getId() == "liveChange") {
					sQuery = oEvent.getParameter("query");
				}
				if (sQuery) {
					var oFilter1 = new sap.ui.model.Filter('FirstName', 'Contains', sQuery);

					var aFilter = new sap.ui.model.Filter([oFilter1]);
					// var aFilter = new sap.ui.model.Filter([oFilter1]);
				}
				oBinding.filter(aFilter);
			},

			// Function to download table data in a pdf format
			downloadpdf: function () {
				debugger;

				var rows = [];
				var oBinding = this.byId("table2").getBinding("items");
				var jsonData = oBinding.getModel().getProperty(oBinding.getPath());

				var BankType = jsonData[0].BankType;
				var RoutingNum = jsonData[0].RoutingNum;
				var AccountNum = jsonData[0].AccountNum;
				var Amount = jsonData[0].Amount;
				var Percent = jsonData[0].Percent;

				var arry = {
					"BankType": BankType,
					"RoutingNum": RoutingNum,
					"AccountNum": AccountNum,
					"Amount": Amount,
					"Percent": Percent
				};
				var arry1 = [];
				arry1.push(arry);

				arry1.forEach(function (arry) {
					var row = [];

					Object.keys(arry).forEach(function (key) {
						row.push(arry[key]);

					});

					rows.push(row);

				});
				var docDefinition = {
					content: [
						{
							style: "header",
							alignment: "center",
							text: "Report"
						},
						{
							table: {
								headerRows: 1,
								widths: ["*", "*", "*", "*", "*"],
								body: [
									["BankType", "RoutingNum", "AccountNum", "Amount", "Percent"],
									...rows
								]
							}
						}
					]
				};
				var pdfDocGenerator = pdfMake.createPdf(docDefinition);
				pdfDocGenerator.download("table.pdf");
			},

			// Function to download table data as excel format

			createColumnConfig: function () {
				var aCols = [];

				aCols.push({
					label: 'BankType',
					type: EdmType.String,
					property: 'BankType'
				});

				aCols.push({
					label: 'RoutingNum',
					type: EdmType.String,
					property: 'RoutingNum'
				});

				aCols.push({
					label: 'AccountNum',
					type: EdmType.String,
					property: 'AccountNum'
				});

				aCols.push({
					label: 'Amount',
					type: EdmType.String,
					property: 'Amount'
				});

				aCols.push({
					label: 'Percent',
					type: EdmType.String,
					property: 'Percent'
				});

				return aCols;
			},

			downloadexcel: function () {
				debugger;
				var aCols, oRowBinding, oSettings, oSheet, oTable;

				aCols = this.createColumnConfig();

				// oTable = this.byId('table2');
				// oRowBinding = oTable.getBinding('rows').aIndices;
				// var TableData = [];
				// if (oRowBinding.length == this.getView().getModel("Data1").getData().results.length) {
				//     TableData = oTable.getBinding('rows');
				// } else {
				//     for (var i = 0; i < oRowBinding.length; i++) {
				//         TableData.push(this.getView().getModel("Data1").getData().results[oRowBinding[i]]);
				//     }
				// }

				var rows = [];
				var oBinding = this.byId("table2").getBinding("items");
				var jsonData = oBinding.getModel().getProperty(oBinding.getPath());

				var BankType = jsonData[0].BankType;
				var RoutingNum = jsonData[0].RoutingNum;
				var AccountNum = jsonData[0].AccountNum;
				var Amount = jsonData[0].Amount;
				var Percent = jsonData[0].Percent;

				var TableData = {
					"BankType": BankType,
					"RoutingNum": RoutingNum,
					"AccountNum": AccountNum,
					"Amount": Amount,
					"Percent": Percent
				};
				var Tablearry = [];
				Tablearry.push(TableData);

				// for(var i = 0; i<TableData.length; i++){
				// arry1.push(TableData[i]);
				// }

				// arry1.forEach(function (arry) {
				//     var row = [];

				//     Object.keys(arry).forEach(function (key) {
				//         row.push(arry[key]);

				//     });

				//     rows.push(row);
				// });

				oSettings = {
					workbook: {
						columns: aCols,
						hierarchyLevel: 'Level'
					},
					dataSource: Tablearry,
					fileName: 'Table export sample.xlsx',
					worker: false
				};

				oSheet = new Spreadsheet(oSettings);
				oSheet.build().finally(function () {
					oSheet.destroy();
				});
			},


			// Function to open fragment to edit perosnal details
			onLoadDialog: function () {
				debugger;

				if (!this.pDialog) {
					this.pDialog = this.loadFragment({
						name: "person.persondetailsproject.fragments.fragment1"
					});
				}

				this.pDialog.then(function (oDialog1) {
					oDialog1.open();
				});
			},

			handleCloseDialogEdit: function () {
				this.byId("pDialog").close();
				// this.byId("pDialog").destroy(true);
				// this.byId("pDialog") = null;
			},

			handleSaveDialogEdit: function () {
				this.byId("pDialog").close();
				// this.byId("_idfrstname").setValue("");
			},

			// onunloadDialog: function() {
			// 	this.byId("pDialog").destroy();
			// },

			// Calendar dialog box
			onLoadCalDialog: function () {

				if (!this.oDialog) {
					this.oDialog = this.loadFragment({
						name: "person.persondetailsproject.fragments.fragment2"
					});
				}

				this.oDialog.then(function (oDialogg) {
					oDialogg.open();
				});
			},

			handleCloseDialog: function () {
				this.byId("oDialog").close();
				// this.byId("oDialog").destroy(true);
				// this.byId("oDialog") = null;
			},

			// function to Edit address details
			onPressEditAddress: function () {
				var vsbl = this.byId("_idform1").getVisible(true);

				if (vsbl) {
					this.byId("_idform1").setVisible(false);
					this.byId("_idform2").setVisible(true);
					this.byId("_idEdit").setText("Save");
					this.byId("_idEdit").setIcon("sap-icon://save");
				} else {
					this.byId("_idform1").setVisible(true);
					this.byId("_idform2").setVisible(false);
					this.byId("_idEdit").setText("Edit");
					this.byId("_idEdit").setIcon("sap-icon://edit");
				}
			},

			// Function to load dialog box to add new record of dependent and beneficiary
			onLoadAddDialog: function () {

				if (!this.aDialog) {
					this.aDialog = this.loadFragment({
						name: "person.persondetailsproject.fragments.fragment3"
					});
				}

				this.aDialog.then(function (oDialog2) {
					oDialog2.open();
				});
			},

			handleCloseDialogAdd: function () {
				this.byId("aDialog").close();
				// this.byId("aDialog").destroy(true);
				// this.byId("aDialog") = null;
				
			},

			// onunloadDialog: function() {
			// 	this.byId("aDialog").destroy();
			// },

			// Function to save all the details entered into the form to add new record
			handleSaveDialogAdd: function (oEvent) {

				debugger;
				var that = this;
				var FirstName = that.getView().byId("_idname").getValue();
				var DateofBirth = that.getView().byId("_iddob").getValue();
				var Relationship = that.getView().byId("_idrltnshp").getValue();
				var Mobile = that.getView().byId("_idmobile").getValue();
				var AddressLine1 = that.getView().byId("_idaddrs").getValue();
				var ZipCode = that.getView().byId("_idzipcode").getValue();

				var array = { FirstName, DateofBirth, Relationship, Mobile, AddressLine1, ZipCode };

				var sData = oEvent.getSource().getModel("dept").getData();

				// sData.candidatedetails.financialcheck.setSelected(true);
				sData.Deptandbeneficiary.push(array);

				that.getView().getModel("dept").setData(sData);

				sap.m.MessageBox.success("Your Dependent Added Successfully!");

				that.getView().byId("_idname").setValue("");
				that.getView().byId("_iddob").setValue("");
				that.getView().byId("_idrltnshp").setValue("");
				that.getView().byId("_idmobile").setValue("");
				that.getView().byId("_idaddrs").setValue("");
				that.getView().byId("_idzipcode").setValue("");

				that.byId("aDialog").close();
			},

			// Function to delete any dependent records 
			handleDeleteStatement: function (oEvent) {
				debugger;
				var that = this;
				var sData = oEvent.getSource().getModel("dept").getData();

				// var oBinding = this.byId("table2").getBinding("items");
				// var jsonData = oBinding.getModel().getProperty(oBinding.getPath());

				var pathvalue = oEvent.oSource.oPropagatedProperties.oBindingContexts.dept.sPath.slice(20);
				sData.Deptandbeneficiary.splice(pathvalue, 1);
				that.getView().getModel("dept").setData(sData);

			},
		});
	});
