var connection = require("./connection.js");


var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw error};
            cb(result);
        })
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += "?";
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if(err) {
                throw error};
            cb(result);
        })
    },
    updateOne: function(table, colInput, statusUpdate, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += colInput;
        queryString += " = ";
        queryString += statusUpdate.toString();
        queryString += " WHERE id = ";
        queryString += condition;
        queryString += ";";
        var id_1 = "id = "+  condition;
        // var qq = "UPDATE burgers SET devoured = " + statusUpdate +  " WHERE " + id_1;
        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if(err) {
                throw error};
            cb(result);
        })
    }
}

module.exports = orm;