"use strict";
var optimist = require('optimist');
var argv = optimist.argv;
var baseUrl_1 = require('../../../../localConfig/baseUrl');
function baseUrlLoader() {
    var baseUrl = baseUrl_1.baseUrlLocalConfig[argv.Env];
    if (argv.IsRunningOnOctopus) {
        baseUrl = argv.BaseUrl;
    }
    return { BaseUrl: baseUrl };
}
exports.baseUrlLoader = baseUrlLoader;