"use strict";
var utilityHelpers_1 = require('../../helpers/utilityHelpers');
var loaders_1 = require('./loaders');
var instance;
function getInstance() {
    return (typeof instance !== 'undefined') ? instance : new ConfigService();
}
exports.getInstance = getInstance;
var ConfigService = (function () {
    function ConfigService() {
        this.loaders = [
            loaders_1.baseUrlLoader,
            loaders_1.localeLoader,
            loaders_1.gridLoader
        ];
        this.reload();
    }
    ConfigService.prototype.addLoader = function (loader) {
        this.loaders.push(loader);
    };
    ConfigService.prototype.reload = function () {
        this._data = this.loaders.reduce(function (data, loader) {
            return utilityHelpers_1.objectAssign(data, loader());
            }, {});
    };
    Object.defineProperty(ConfigService.prototype, "data", {
        get: function () {
            return Object.freeze(this._data);
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.injectIntoEnv = function () {
        var _this = this;
        var envData = Object
            .keys(this.data)
            .reduce(function (envKeyConfig, key) {
                var envKey = "E2E" + key;
                var value = _this.data[key];
                return utilityHelpers_1.objectAssign(envKeyConfig, (_a = {}, _a[envKey] = value, _a));
                var _a;
            }, {});
        utilityHelpers_1.objectAssign(process.env, envData);
    };
    return ConfigService;
}());