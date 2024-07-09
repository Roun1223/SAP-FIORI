sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("unit9binding.controller.Main", {
        onInit: function () {
            // 데이터 정의 - Data object & date property and value
            var oData = {
                lastName: "홍",
                firstName: "길동",
                enable: false,
                checked: true
            }

            //JSON Model 생성 
            // 아래 방법 또는 var oModel = new sap.ui.moderl.json.JSONModel();
            var oModel = new JSONModel();

            //JSON Model에 데이터 할당.
            // 위에 생성된 모델에 그 위 oData를 집어넣음 
            // 데이타를 먼저 선언 > 모델 생성 > 데이터 전달 
            oModel.setData(oData);

            // 해당 방법처럼 할당할 수도 있다. 
//var oModel = new sap.ui.model.json.JSONModel();
// oModel.setData({
//     "firstName": "John",
//     "enabled": true
// });


// oModel.loadData("model/data.json");

            // JSON Model을 View에 할당
            this.getView().setModel(oModel);
        }
    });
});
