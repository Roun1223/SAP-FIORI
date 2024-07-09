sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller, Fragment) {
    "use strict";

    return Controller.extend("unint08dialog.controller.Main", {
        onInit: function () {

        },
        onPopup: function () {
            var oView = this.getView();

            // Popup Dialog 생성.
            if (!this.byId("digPopup")) {
                // 위에 선언 안하고 sap.ui.core.Fragment.load 해도 된다.
                Fragment.load({
                    id: oView.getId(),
                    //유닛 프로젝트 안에 뷰 폴더에 파일 가져온다
                    name: "unint08dialog.view.PopupFrag",
                    type: "XML",
                    controller: this
                }).then (
                    function (aaPopup) {
                        // Dialog Fragment에 대한 model, lifecycle 관리를
                        // 해당 컨트롤러에 연결하려면 addDependent 메소드 사용.
                        // 같이 사용할거다. 
                        oView.addDependent(aaPopup);
                        aaPopup.open();
                    }
                );
            } else {
                this.byId("digPopup").open();

            }
        },
        onClose: function() {
            this.byId("digPopup").close();
            var vInput = this.getView().byId("inpName").getValue();
            this.getView().byId("idTxt").setText(vInput);
        }
    });
});
