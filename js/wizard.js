var jQueryUI = require('jqueryui-detached');
var $ = jQueryUI.getJQueryUI();

// Yeah, we'd replace this with a handlebars template ...
var modal = 
    $('<div class="jquery-ui-1">' +
    '<div id="jenkins-plugin-wizard" title="Jenkins Install Wizard">' +
    '<p>' +
    '<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>' +
    'Click OK to install....' +
    '</p>' +
    '</div>' +
    '</div>');

$('body').append(modal);

$('#jenkins-plugin-wizard').dialog({
    modal: true,
    buttons: {
        Ok: function () {
            $(this).dialog("close");
            $('#jenkins-plugin-wizard').remove();
        }
    }
});

