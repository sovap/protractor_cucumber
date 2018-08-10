'use-strict';

var webssoUrl = process.env.URL_WEBSSO || 'https://login-intranet.isso.intranet.db.com/websso/sso_Logon.sso';
var environmentUrl = process.env.URL_ENV || 'https://int1.gcrs.risk.intranet.db.com';
var crdUrl = process.env.URL_CRD || '/crdv2/';
var sqlFacadeUrl = process.env.URL_SQL_FACADE || 'http://localhost:4445/rest-sql-facade';
var paragonJndi = '/jdbc/Paragon';
var workflowJndi = '/jdbc/Workflow';

exports.config = {
    
    framework: "custom",
    frameworkPath: "node_modules/protractor-cucumber-framework",
    allScriptsTimeout: 180000,
    getPageTimeout: 120000,
    useAllAngular2AppRoots: true,
    ignoreUncaughtExceptions: true,
    directConnect: true,
    chromeDriver: './binaries/webdriver/chromedriver.exe',

    capabilities: {
        
        browserName: "chrome",

        chromeOptions: {
            args: [
                '--headless',
                '--disable-gpu',
                '--window-size=1920x1080'
                ],

            binary: './binaries/browser/chrome-win32/chrome.exe'
        }
    },

    params: {
        
        webssoUrl: webssoUrl,
        environmentUrl: environmentUrl,
        crdUrl: crdUrl,
        sqlFacadeUrl: sqlFacadeUrl,
        paragonJndi: paragonJndi,
        workflowjndi: workflowJndi,
        timeout: 120000
    },

    cucumberOpts: {

        require: [
            
            "support/*.js",
            "steps/*.js",
            "steps/*/*.js"
        ],
        
        format: 'json:./results/results.json'
    }
};
