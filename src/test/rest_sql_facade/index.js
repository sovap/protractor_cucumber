'use-strict';

var request = require('sync-request');

module.exports = RestSqlFacade;

function RestSqlFacade(baseUrl, jndiName) {
    this.baseUrl = baseUrl;
    this.jndiName = jndiName;
}

function sqlPerform(url, jndiName, sql, parameters) {
    // console.log('Requesting "' + url + '"');
    var sqlStatement = {
        "jndiName": jndiName,
        "sql": sql,
        "parameters": parameters
    };
    // console.log('Statement: ' + JSON.stringify(sqlStatement));
    var res = request('POST', url, {
        json: sqlStatement
    });
    return JSON.parse(res.getBody('utf8'));
}

RestSqlFacade.prototype.select = function select(sql, parameters) {
    var url = this.baseUrl + '/select';
    return sqlPerform(url, this.jndiName, sql, parameters);
};

RestSqlFacade.prototype.update = function update(sql, parameters) {
    var url = this.baseUrl + '/update';
    return sqlPerform(url, this.jndiName, sql, parameters);
};




