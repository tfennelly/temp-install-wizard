var jQueryUI = require('jqueryui-detached');
var $ = jQueryUI.getJQueryUI();

// Yeah, we'd replace this with a handlebars template ...
var modal = 
    $('<div id="jenkins-plugin-wizard" title="Jenkins Install Wizard">' +
    '<p>' +
    '<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>' +
    'Click OK to install....' +
    '</p>' +
    '</div>');

$('body').append(modal);

modal.dialog({
    dialogClass: "jenkins-plugin-wizard-dialog",
    modal: true,
    buttons: {
        Ok: function () {
            $(this).dialog("close");
            modal.remove();
        }
    }
});

// Need to wrap. See https://github.com/jenkinsci/js-libs/tree/master/jquery-detached#namespacing-pitfalls
$('.jenkins-plugin-wizard-dialog').wrap('<div class="jquery-ui-1"></div>');

