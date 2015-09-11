var ajax = require('./util/ajax');

exports.installPlugins = function(pluginList, callback) {
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
                callback();
            });
        });
    }
};