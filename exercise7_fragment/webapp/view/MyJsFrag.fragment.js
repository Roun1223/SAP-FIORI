sap.ui.jsfragment("exercise7fragment.view.MyJsFrag", {

    createContent: function(oController) {

        var oInput = new sap.m.Input(this.createId("idInp"));

        var oButton = new sap.m.Button({
            text: "Say Hello (JavaScript Fragment)",
            press: [oController.onJsButtonPress, oController]
        });

        var oText = new sap.m.Text(this.createId("idText"));

        return new sap.ui.layout.HorizontalLayout({
            content: [oInput, oButton, oText]
        });

    }

})