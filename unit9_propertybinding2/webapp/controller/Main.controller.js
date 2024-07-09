sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit9propertybinding2.controller.Main", {
        onInit: function () {
            // Model 생성. 
            var oModel = new sap.ui.model.json.JSONModel();

            //Model에 data 할당하기
            oModel.loadData("/model/data.json");

            // 모델을 View에 할당
            this.getView().setModel(oModel);


        }
    });
});
