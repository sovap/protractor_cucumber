'use-strict';
var Sql = require('./index.js');
//In your project replace the line above with:
//var Sql = require('rest-sql-facade');

var sql = new Sql('http://localhost:9090/rest-sql-facade', '/jdbc/odsDB');


//Example 1
//Select the first 3 parties from the party table
var result = sql.select("select p.*, ROWNUM from PARTY p where ROWNUM <= 3");
//result is an array of objects where each object is a row from the result set.
console.log(result);

console.log('-------------------------------------------------------------------------------');

//making use of the result
result.forEach(function (party) {
    //the field names of the party object are the same as the column names or aliases from the SQL statement.
    console.log('Legal Name: ' + party.LEGAL_NAME);
    //the date below is represented as the unix time in milliseconds
    console.log('Business Start Date: ' + party.BUSINESS_START_DATE);
    //format the date to a human readable shape
    var startDate = new Date(party.BUSINESS_START_DATE);
    console.log('Business Start Date (formatted in javascript): ' + startDate);

});
console.log('-------------------------------------------------------------------------------');

//Example 2
//As an alternative to the date issue, the date can be formatted straight from the SQL statement:
result = sql.select("select to_char(BUSINESS_START_DATE, 'yyyy-mm-dd') BUSINESS_START_DATE_FORMATTED, ROWNUM from PARTY p where ROWNUM <= 3");

result.forEach(function (party) {
    console.log('Business Start Date (formatted in SQL): ' + party.BUSINESS_START_DATE_FORMATTED);
})
console.log('-------------------------------------------------------------------------------');


//Example 3
//Using parameterized statement.
//This is done by using the question mark (?) placeholder. Let's take the statement from previous example and parametrize it.
//The syntax is almost the same. We have replaced the date format string and the number of rows with '?'. Their values are now in an array that is passed as
//the last argument of our 'select' function.
result = sql.select("select to_char(BUSINESS_START_DATE, ?) BUSINESS_START_DATE_FORMATTED, ROWNUM from PARTY p where ROWNUM <= ?", ['yyyy-mm-dd', 3]);

//The result should be identical with the previous one.
result.forEach(function (party) {
    console.log('Business Start Date (formatted in SQL): ' + party.BUSINESS_START_DATE_FORMATTED);
})
console.log('-------------------------------------------------------------------------------');



//Example 4
// sql.update() function allows Update/delete/DDL operations
// The example below will perform a simple update for a String and a Date. The returned result is the count of the rows affected by the update/delete operation.
var count = sql.update("update party set LEGAL_NAME = ?, BUSINESS_START_DATE = TO_DATE(?, 'YYYY-MM-DD') where id = ?", ['New Legal Name', '2015-07-01', 178328384]);
console.log("Updated " + count + " rows");










