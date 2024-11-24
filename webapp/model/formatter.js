sap.ui.define([], () => {
	"use strict";

	return {
        formateDate: function(sDate) {
            if (sDate) {
                var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
                    pattern: "MM/dd/yyyy" // You can specify your desired date format
                });
                sDate = oDateFormat.format(new Date(sDate));
            }

            return sDate;
        }
    }
});