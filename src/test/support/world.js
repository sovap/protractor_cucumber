'use strict';

module.exports = function(){

    this.World = function World() {

        // here we can specify common parameters or function that can be directly called from steps

        this.webssoLogin = function(user_email, user_password) {

            var webssoUrl = browser.params.webssoUrl;
            var urlSuffix = '?CTAuthMode=BASIC&auth_mode=BASIC&ct_orig_uri=&sso_operation=authenticate_user&user=' + user_email + '&password=' + user_password;
            var authUrl = webssoUrl + urlSuffix;

            browser.ignoreSynchronization = true;
            browser.get(authUrl);
        }
        
    };
    
};
