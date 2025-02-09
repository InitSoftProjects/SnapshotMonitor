sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/arumatech/snapshotmonitor/model/formatter",
    "sap/ui/core/UIComponent"
],
function (Controller, JSONModel, formatter, UIComponent) {
    "use strict";
    return Controller.extend("com.arumatech.snapshotmonitor.controller.CreateSnapshot", {
        formatter: formatter,
        onInit: function () {
            var oModel = new JSONModel({
                snapID: "",
                snapType: "",
                snapDate: ""
            });
            this.getView().setModel(oModel, "viewModel");
        },

        onCreateSnapshot: function() {
            this._navBack();
        },

        onResetPress: function() {
            var oModel = this.getView().getModel("viewModel");
            oModel.setData({
                snapID: "",
                snapType: "",
                snapDate: ""
            });
        },

        _navBack: function() {
            UIComponent.getRouterFor(this).navTo("RouteMain");
        }
    });
});
