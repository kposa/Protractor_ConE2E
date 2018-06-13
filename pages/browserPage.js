var browserPage = function () {
    this.waitForAngularEnabled = function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://google.com').then(function(){
            browser.waitForAngularEnabled(true);
            expect(true).toBe(true);
        })
    }

    this.restart = function(){
        browser.get('http://angular.io').then(function(){
            browser.restart().then(function(){
                expect(true).toBe(true);
            })
        })
    }
}
module.exports = new browserPage();