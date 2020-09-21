const connection = require("../config/connection.js");

function printQuestionMarks(num){
  var marks = [];
  for (i=0; i<num; i++){
    marks.push("?")
  }
  console.log('marks: ', marks);
  
  return marks.toString();
}

function objToSql(obj){
  const arr = [];
  for(var key in obj){
    var value = obj[key];
    if(Object.hasOwnProperty.call(obj, key)){
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
    console.log('cols: ', cols.toString());
    const marks = printQuestionMarks(vals.length);
    console.log('marks: ', marks);
    
    const query = `INSERT INTO ${table} (${cols.toString()}) VALUES (${marks})`
    connection.query(query, [vals], function(err, res){
      if (err) throw err;

      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb){
    const colVals = objToSql(objColVals);

    const query = `UPDATE ${table} SET ${colVals} WHERE ${condition};`
    connection.query(query, function(err, res){
      if (err) throw err;

      cb(res);
    });

  }
}

module.exports = orm;