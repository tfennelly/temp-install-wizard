var ajax = require('./util/ajax');
var browser = require('./util/browser');

exports.installPlugins = function(pluginList) {
    if (pluginList) {
        var apiCallArg = {};
        
        // Construct the call args.
        apiCallArg.dynamicLoad = true;
        for (var i = 0; i < pluginList.length; i++) {
            apiCallArg['plugin.' + pluginList[i]] = true;
        }
        
        // TODO Would be "nicer" as a JSON POST.
        ajax.execAsyncGET('/pluginManager/install', apiCallArg, function() {
            ajax.execAsyncGET('/saveLastExecVersion', undefined, function() {
                // Redirect the browser to the update center page now so 
                // they can follow plugin install process.
                browser.goTo('/updateCenter')
            });
        });
    }
};