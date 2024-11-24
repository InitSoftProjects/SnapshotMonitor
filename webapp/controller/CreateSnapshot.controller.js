sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/arumatech/snapshotmonitor/model/formatter"
],
function (Controller, JSONModel, formatter) {
    "use strict";
    return Controller.extend("com.arumatech.snapshotmonitor.controller.CreateSnapshot", {
        formatter: formatter,
        onInit: function () {

        }
    });
});
