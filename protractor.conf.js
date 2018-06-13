var ConfigService = require('./lib/services/ConfigServices');
var SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var config = ConfigService.getInstance();
var _a = config.data,Locale = _a.Locale, GridIsEnabled = _a.GridIsEnabled;
config.injectIntoEnv();
exports.config = {
    baseUrl:'http://angular.io',
    directConnect:true,
    //specs:['./specs/*.*'],
    suites:{
        testSuite:'./specs/*.*'
    },
    onPrepare:function(){
        var specReporter = new SpecReporter({
            displayStacktrace: "all",
            displayPendingSpec: true,
            displaySpecDuration: true
        });
        jasmine.getEnv().addReporter(specReporter);
    },
    afterLaunch:function(){
        console.log('afterLaunch');
    },
    capabilities:{
        browserName: 'chrome',
        /*chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        },*/
        shardTestFiles: GridIsEnabled,
        maxInstances: GridIsEnabled ? 20 : 0
    },
    seleniumAddress: GridIsEnabled ? 'http://us-vw01096.phibred.com:4444/wd/hub' : '',
    //chromeDriver: getSeleniumFilePath(['chromedriver', '.exe']),
    //seleniumServerJar: getSeleniumFilePath(['selenium-server-standalone', '.jar']),
    framework: "jasmine2",
    jasmineNodeOpts: {
        defaultTimeoutInterval: 600000,
        isVerbose: true,
        showColors: true,
        print: function () {
        }
    },
    allScriptsTimeout: 60000,
    getPageTimeout: 60000
}