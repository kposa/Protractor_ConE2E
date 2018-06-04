"use strict";
var optimist = require('optimist');
var grid_1 = require('../../../../localConfig/grid');
var argv = optimist.argv;
function gridLoader() {
    return { GridIsEnabled: (argv.Grid === "true") ? true : grid_1.gridIsEnabledLocally };
}
exports.gridLoader = gridLoader;