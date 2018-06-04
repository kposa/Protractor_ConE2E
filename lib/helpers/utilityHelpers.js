function objectAssign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var mergeObject = Object(target);
    for (var index = 0; index < sources.length; index++) {
        var source = sources[index];
        if (source != null) {
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    mergeObject[key] = source[key];
                }
            }
        }
    }
    return mergeObject;
}
exports.objectAssign = objectAssign;