'use strict';

var Chai = require('chai').use(require('chai-as-promised'));
var Data = require('data');
var Facade = require('rest_sql_facade');

var expect = Chai.expect;

module.exports = function () {

    this.Given(/^Step without parameters$/, function (callback) {
        expect(true).to.equal(true);
        callback();
    });

    this.When(/^Step with one parameter "([^"]*)"$/, function (parameter, callback) {
        // parameter is represented by string: "([^"]*)"
        expect(parameter).to.equal("value1");
        callback();
    });

    this.Then(/^Step with multiple parameters "([^"]*)", "([^"]*)", and "([^"]*)"$/, function (parameter1, parameter2, parameter3, callback) {
        expect(parameter1).to.equal("value1");
        expect(parameter2).to.equal("value2");
        expect(parameter3).to.equal("value3");
        callback();
    });

    this.Then(/^Step with comparison against table$/, function (table, callback) {
        var actualTable = Data.exampleData.EXAMPLE_TABLE;

        // table.raw() will turn the provided table to array of arrays (other methods are available, look online)
        var expectedTable = table.raw();

        for (var i = 0; i < expectedTable.length; i++) {
            expect(JSON.stringify(actualTable[i])).to.equal(JSON.stringify(expectedTable[i]));
        }
        callback();
    });

    this.Given(/^Precondition is met$/, function (callback) {
        expect(1).to.equal(1);
        callback();
    });

    this.When(/^Action is executed$/, function (callback) {
        expect(1).to.equal(1);
        callback();
    });

    this.Then(/^Validation failed$/, function (callback) {
        expect(1).to.equal(2);
        callback();
    });

    this.Then(/^Query result is correct$/, function (callback) {
        var sql = new Facade (browser.params.sqlFacadeUrl, browser.params.paragonJndi);
        var result = sql.select('select LEGAL_NAME, SHORT_NAME from CORPORATE where BP_ID = 458461');
        expect(result[0].LEGAL_NAME).to.be.equal("VORWERK USA INC.");
        expect(result[0].SHORT_NAME).to.be.equal("VORWERK_VORWERKINC");
        callback();
    });

};
