var optimist = require('optimist');
var argv = optimist.argv;
function localeLoader() {
    return {
        Locale: (argv.Locale !== undefined) ? argv.Locale : 'en-us'
    };
}
exports.localeLoader = localeLoader;