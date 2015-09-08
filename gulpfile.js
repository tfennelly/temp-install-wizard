var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the modules.
//
builder.bundle('js/wizard.js')
    .less('less/wizard.less')
    .asJenkinsModuleResource();
