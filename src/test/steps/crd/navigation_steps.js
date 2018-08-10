'use strict';

var Chai = require('chai').use(require('chai-as-promised'));
var Pages = require('pages');

var expect = Chai.expect;
var EC = protractor.ExpectedConditions;
var crdMainPage = Pages.crdMainPage;

module.exports = function () {

    this.When(/^User navigate to web application Credit Risk Desktop$/, function (callback) {
                
        var appUrl = browser.params.environmentUrl + '/crdv2/';

        browser.get(appUrl).then(function(){
            browser.wait(EC.titleContains('CRD'),browser.params.timeout, 'Credit Risk Desktop application home page failed to load').then(function(){
                //browser.ignoreSynchronization = false;
            });
            expect(browser.getTitle()).to.eventually.contain('CRD').and.notify(callback);
        });
    });

    this.Then(/^Web application Credit Risk Desktop is correctly loaded$/, function (callback) {
        
        var inboxElement = crdMainPage.buttonInbox;
        expect(inboxElement.isPresent()).to.eventually.be.true.and.notify(callback);
    });

};
