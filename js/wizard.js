var jQueryUI = require('jqueryui-detached');
var $ = jQueryUI.getJQueryUI();
var browser = require('./util/browser');

var wizardTemplate = require('./templates/wizard.hbs');
var modal = $(wizardTemplate());

$('body').append(modal);

modal.dialog({
    dialogClass: "jenkins-plugin-wizard-dialog",
    modal: true,
    buttons: {
        Ok: function () {
            $(this).dialog("close");
            modal.remove();
            
            // Install the "recommended" plugins ...
            var pm = require('./pluginManager');
            pm.installPlugins(['github', 'workflow-aggregator'], function() {
                // Redirect the browser to the update center page so 
                // the user can follow the plugin install progress.
                browser.goTo('/updateCenter')
            });
        }
    }
});

// Need to wrap. See https://github.com/jenkinsci/js-libs/tree/master/jquery-detached#namespacing-pitfalls
$('.jenkins-plugin-wizard-dialog').wrap('<div class="jquery-ui-1"></div>');

