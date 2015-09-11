var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the modules.
//
builder.bundle('js/wizard.js')
    .withExternalModuleMapping('jquery-detached', 'jquery-detached:jquery2')
    .withExternalModuleMapping('jqueryui-detached', 'jquery-detached:jqueryui1')
    .withExternalModuleMapping('handlebars', 'handlebars:handlebars3')
    .less('less/wizard.less')
    .asJenkinsModuleResource();
