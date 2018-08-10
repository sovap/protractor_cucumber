'use strict';

module.exports = {

    // page elements
    pageHeader: element(by.id("pd-header")),
    pageError: element(by.xpath('//div[@class="error-msg"]')),
    
    // tabs
    tabLimits: element(by.id('tab_limits')),
    tabCollateral: element(by.id('tab_collateral')),
    tabStaticData: element(by.id('tab_static-data')),
    tabDocument: element(by.id('tab_document'))
    
};