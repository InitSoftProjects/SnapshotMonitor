sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/arumatech/model/formatter"
],
function (Controller, JSONModel, formatter) {
    "use strict";
    return Controller.extend("com.arumatech.SnapshotMonitor.controller.CreateSnapshot", {
        formatter: formatter,
        onInit: function () {

        }
    });
});
