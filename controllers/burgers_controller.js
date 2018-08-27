var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    })

});


router.post("/api/burgers", function(req,res) {
    // console.log(req.body);
    burger.insertOne(
        "burger_name", req.body.burger_name, function(result) {
        res.json({id: result.insertId})
    }
    )
});


router.put("/api/burgers/:id", function(req,res) {
    var condition = req.params.id;
    console.log("Condition," + condition);
    burger.updateOne(
        "devoured", req.body.devoured, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
    console.log("Current devoured status: " + req.body.devoured);
})

module.exports = router;