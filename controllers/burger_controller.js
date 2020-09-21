const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res){
  burger.all(function(data){
    console.log(data);
    res.render("index",{burgers: data});
  });
});

router.put("/api/:id", function(req, res){
  const condition = "id = " + req.params.id;

  burger.update({ devoured: req.body.devoured }, condition, function(result){
    console.log(result);
    if (result.changedRows == 0){
      return res.status(404).end();
    } else {
      return res.status(200).end();
    };

  });

});

router.post("/api/burgers", function(req, res){
  // console.log('req: ', req);
  console.log('req.body: ', req.body);

  burger.create(["burger_name"], [req.body.burger_name], function(result){
    console.log(result);
    res.json(result);
  })
});


module.exports = router;