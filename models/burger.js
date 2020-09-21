const orm = require("../config/orm");

const burger = {
  all: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  create: function(cols, vals, cb){
    console.log('vals: ', vals);
    console.log('cols: ', cols);
    
    orm.insertOne("burgers", cols, vals, function(res){
      cb(res);
    })
  },
  update: function(objColVals, condition, cb){
    console.log('condition: ', condition);
    console.log('objColVals: ', objColVals);
    
    orm.updateOne("burgers", objColVals, condition, function(res){
      cb(res);
    })
  }
};

module.exports = burger;