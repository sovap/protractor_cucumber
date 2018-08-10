'use strict';

module.exports = function () {

    var Data = require('data');
    var users = Data.userData;

    this.Before(function () {
        
        // maximize browser window
        browser.driver.manage().window().maximize();
        
    });

    this.After(function (scenario, callback) {
        
        // in case of failure create screenshot and add it to the report
        if (scenario.isFailed()) {
            browser.driver.takeScreenshot().then(function(buffer){
                scenario.attach(new Buffer(buffer, 'base64'), 'image/png', callback);
        }, function (err) {
                callback(err);
            });
        } else {
            callback();
        }

    });
    
};
