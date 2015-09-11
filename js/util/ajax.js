var jQuery = require('jquery-detached');

exports.execAsyncGET = function (url, params, onsuccess) {
    var $ = jQuery.getJQuery();

    var rootUrl = getRootUrl($);
    $.ajax({
        url: (rootUrl + url),
        type: 'get',
        data: params,
        success: onsuccess
    });
};

function getRootUrl($) {
    return $('head').attr('data-rooturl');
}