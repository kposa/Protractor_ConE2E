var testData = require('../testData/data.json');
var testPage = function () {
    var getStarted = element(by.css('.button.hero-cta'));
    this.testMethod = function(){
        console.log(testData.userName);
        browser.get(browser.baseUrl);
        getStarted.click().then(function () {
           
        });
    }
}
module.exports = new testPage();