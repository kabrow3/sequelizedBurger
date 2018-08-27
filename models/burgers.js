// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(colsInput, burgerInput, cb) {
        orm.insertOne("burgers", colsInput, burgerInput, function(res) {
            cb(res);
        })
    },
    updateOne: function(colInput, statusUpdate, idInput, cb) {
        orm.updateOne("burgers", colInput, statusUpdate, idInput, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;