'use strict';

var chai = require('chai').use(require('chai-as-promised'));
var Pages = require('pages');
var Data = require('data');

var expect = chai.expect;
var users = Data.userData;
var EC = protractor.ExpectedConditions;
var crdMainPage = Pages.crdMainPage;

module.exports = function () {

    this.Given(/^User is authenticated against web sso as: "([^"]*)"$/, function (user_object, callback) {

        browser.ignoreSynchronization = true;
        
        for (var user in users) {
            if (users.hasOwnProperty(user)) {
                if(user == user_object) {
                    this.webssoLogin(users[user].EMAIL, users[user].PASSWORD);
                    break;
                }
            }
        }
        
        var elemWelcome = element(by.xpath('//h1[text()="Welcome"]'));
        expect(elemWelcome.isPresent()).to.eventually.be.true.and.notify(callback);
    });

    this.Given(/^User is logged in CRD as: "([^"]*)"$/, function (user_object, callback) {

        // web sso authentication
        for (var user in users) {
            if (users.hasOwnProperty(user)) {
                if(user == user_object) {
                    this.webssoLogin(users[user].EMAIL, users[user].PASSWORD);
                    break;
                }
            }
        }

        // login to app
        var appUrl = browser.params.environmentUrl + browser.params.crdUrl;

        browser.get(appUrl).then(function(){
            browser.wait(EC.titleContains('CRD'),browser.params.timeout, 'Credit Risk Desktop application home page failed to load').then(function(){
                //browser.ignoreSynchronization = false; // to be updated when we will figure out stream issue
            });
            expect(browser.getTitle()).to.eventually.contain('CRD').and.notify(callback);
        });
    });

    this.Given(/^User is logged in Dashboard as: "([^"]*)"$/, function (user_object, callback) {

        // var elemWelcome = element(by.xpath('//h1[text()="Welcome"]'));
        // expect(elemWelcome.isPresent()).to.eventually.be.true.and.notify(callback);
    });

};
