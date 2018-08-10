'use strict';

var Chai = require('chai').use(require('chai-as-promised'));
var Pages = require('pages');

var expect = Chai.expect;
var EC = protractor.ExpectedConditions;
var dashboardMainPage = Pages.dashboardMainPage;

module.exports = function () {

    this.When(/^User navigate to web application Dashboard tab Limits$/, function (callback) {
                
        var appUrl = browser.params.environmentUrl + '/party-dashboard/party/21/limits';
        var tabElement = dashboardMainPage.tabLimits;

        browser.get(appUrl).then(function(){
            browser.wait(EC.titleContains('CRD'),browser.params.timeout, 'Dashboard application page failed to load').then(function(){
                browser.ignoreSynchronization = false;

            });
            expect(tabElement.isPresent()).to.eventually.be.true.and.notify(callback);
        });
    });

    this.When(/^User navigate to web application Dashboard tab Collateral$/, function (callback) {
        var appUrl = browser.params.environmentUrl + '/party-dashboard/party/21/collateral';
        var tabElement = dashboardMainPage.tabCollateral;

        browser.get(appUrl).then(function(){
            browser.wait(EC.titleContains('CRD'),browser.params.timeout, 'Dashboard application page failed to load').then(function(){
                browser.ignoreSynchronization = false;
            });
            expect(tabElement.isPresent()).to.eventually.be.true.and.notify(callback);
        });

    });

    this.When(/^User navigate to web application Dashboard tab Static data$/, function (callback) {
        var appUrl = browser.params.environmentUrl + '/party-dashboard/party/21/static-data';
        var tabElement = dashboardMainPage.tabStaticData;

        browser.get(appUrl).then(function(){
            browser.wait(EC.titleContains('CRD'),browser.params.timeout, 'Dashboard application home page failed to load').then(function(){
                browser.ignoreSynchronization = false;
            });
            expect(tabElement.isPresent()).to.eventually.be.true.and.notify(callback);
        });

    });

    this.When(/^User navigate to web application Dashboard tab Documents$/, function (callback) {
        var appUrl = browser.params.environmentUrl + '/party-dashboard/party/21/document';
        var tabElement = dashboardMainPage.tabDocument;

        browser.get(appUrl).then(function(){
            browser.wait(EC.titleContains('CRD'),browser.params.timeout, 'Dashboard application home page failed to load').then(function(){
                browser.ignoreSynchronization = false;
            });
            expect(tabElement.isPresent()).to.eventually.be.true.and.notify(callback);
        });

    });

    this.Then(/^Web application Dashboard is correctly loaded$/, function (callback) {
        
        var headerElement = dashboardMainPage.pageHeader;
        expect(headerElement.getText()).to.eventually.contain("GCRS - Global Credit Risk System").and.notify(callback);
    });

    this.Then(/^There are no unexpected error popups displayed$/, function (callback) {
        var errorMessageElement = dashboardMainPage.pageError;
        expect(errorMessageElement.isPresent()).to.eventually.be.false.and.notify(callback);
    });

};
