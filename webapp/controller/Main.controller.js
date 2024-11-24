sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/arumatech/snapshotmonitor/model/formatter",
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
    "sap/ui/core/UIComponent"
],
function (Controller, JSONModel, formatter, Filter, FilterOperator, UIComponent) {
    "use strict";
    return Controller.extend("com.arumatech.snapshotmonitor.controller.Main", {
        formatter: formatter,
        onInit: function () {
            this.oFilterBar = this.getView().byId("filterbar");
			this.oTable = this.getView().byId("table");

            // Create JSON model
            var oModel = new JSONModel();
            oModel.loadData("/model/jsonData.json");

            // Set the model to the view
            this.getView().setModel(oModel);
        },

        onSearch: function () {
			var aTableFilters = this.oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {
				var oControl = oFilterGroupItem.getControl(),
					sValue = oControl.getValue(),
					aFilters = [ new Filter({
							path: oFilterGroupItem.getName(),
							operator: FilterOperator.EQ,
							value1: sValue
						})];

                    if (sValue) {
                        aResult.push(new Filter({
                            filters: aFilters,
                            and: false
                        }));
                    }
				return aResult;
			}, []);

			this.oTable.getBinding("items").filter(aTableFilters);
			this.oTable.setShowOverlay(false);
		},

        onSelectionChange: function (oEvent) {
			this.oFilterBar.fireFilterChange(oEvent);
		},

        onFilterChange: function () {
			this.oTable.setShowOverlay(true);
		},

        onCreateSnapshot: function() {
            UIComponent.getRouterFor(this).navTo("Create");
        }
    });
});
