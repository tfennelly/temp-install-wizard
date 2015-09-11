var jQueryUI = require('jqueryui-detached');
var $ = jQueryUI.getJQueryUI();

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
            pm.installPlugins(['github', 'workflow-aggregator']);
        }
    }
});

// Need to wrap. See https://github.com/jenkinsci/js-libs/tree/master/jquery-detached#namespacing-pitfalls
$('.jenkins-plugin-wizard-dialog').wrap('<div class="jquery-ui-1"></div>');

