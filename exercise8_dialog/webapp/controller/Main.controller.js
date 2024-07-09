sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller, Fragment) {
    "use strict";

    return Controller.extend("exercise8dialog.controller.Main", {
        onInit: function () {

            alert("123")
        }, 
        
        onClick: function () {
            var oView = this.getView();

            if (!this.byId("idDia")) {
                Fragment.load({
                    id: oView.getId(),
                    name: "exercise8dialog.view.Dialog",
                    type: "XML",
                    controller: this
                }).then (function (aDig) {
                    oView.addDependent(aDig);
                    aDig.open();
                }); 
            } else {
                this.byId("idDia").open();
            }
        }, onClose: function() {
            this.byId("idDia").close();
            var oInp=this.byId("idinpFrg");
            var oText=this.byId("idText");

            oText.setText("Hello " + oInp.getValue());
        }
        
    });
});
