var jsTest = require("jenkins-js-test");

describe("wizard.js", function () {

    it("- simple show and go test", function (done) {
        jsTest.onPage(function() {
            jsTest.requireSrcModule('wizard.js');
            
            var $ = require('jquery-detached').getJQuery();
            
            // Make sure the dialog was shown.
            var wizard = $('#jenkins-plugin-wizard');
            expect(wizard.size()).toBe(1);
            var okButton = $('.ui-dialog-buttonset button');
            expect(okButton.size()).toBe(1);

            // no-op ajax calls
            require("./util").mockAjax();
            
            // Click the ok button.
            okButton.click();
            
            // Dialog should be gone.
            wizard = $('#jenkins-plugin-wizard');
            expect(wizard.size()).toBe(0);

            done();
        });
    });
});