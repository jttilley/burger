const connection = require("connection.js");

function printQuestionMarks(num){
  var marks = [];
  for (i=0; i<num; i++){
    marks.push("?")
  }
  return marks.toString();
}

function objToSql(obj){
  const arr = [];
  for(var key in obj){
    var value = obj[key];
    if(Object.hasOwnProperty(ob, key)){
      if(typeof(value)=== String && value.indexof(" ")){
        value = `"${value}"`;
      }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
}


const orm = {
  selectAll: function(table, cb){
    const query = `SELECT * FROM ${table};`
    connection.query(query, function(err, res){
      if (err) throw err;

      cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb){
    const query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`
    connection.query(query, function(err, res){
      if (err) throw err;

      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb){
    const query = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`
    connection.query(query, function(err, res){
      if (err) throw err;

      cb(res);
    });

  },
  delete: function(table, condition, cb){
    const query = `DELETE FROM ${table} WHERE ${condition};`
    connection.query(query, function(err, res){
      if (err) throw err;

      cb(res);
    });
  },
}

module.exports = orm;