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

        },

        onCreateSnapshot: function() {
            this._navBack();
        },

        _navBack: function() {
            UIComponent.getRouterFor(this).navTo("RouteMain");
        }
    });
});
