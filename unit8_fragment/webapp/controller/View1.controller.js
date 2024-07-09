sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit8fragment.controller.View1", {
        onInit: function () {

        },
        onMainClick: function () {
            var mValue= this.getView().byId("inpMain").getValue();
            sap.m.MessageBox.show(mValue);
        },
        onFragClick: function (){
            var fValue = this.getView().byId(sap.ui.core.Fragment.createId("idXmlFrag", "inpFrag"));
            sap.m.MessageBox.show(fValue.getValue());
        }
    });
});
