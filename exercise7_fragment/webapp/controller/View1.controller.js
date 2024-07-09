sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("exercise7fragment.controller.View1", {
        onInit: function () {

        }, onXmlButtonPress: function () {
            var oInput = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInp"));
            var oText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idText"));

            oText.setText("Hello " + oInput.getValue());
        
        }, onJsButtonPress: function () {

            var oInput = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idInp"));
            var oText = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idText"));

            oText.setText("Hello " + oInput.getValue());
        
        } 



    });
});
