const { con } = require("./../config/dbconn");

const register = (req:any, res:any) => {
  console.log("req", req.body);

  const { name, mobile, date, time, usertypeid } = req.body;

  var sql = `INSERT INTO users (name, mobile,date,time,usertypeid) VALUES ('${name}', ${mobile},${date},${time},${usertypeid})`;
  con.query(sql, function (err, result) {
    if (err) {
      res.send({
        Success: false,
        Message: err.sqlMessage,
      });
    } else {
      console.log("Result: " + JSON.stringify(result));

      res.send({
        Success: true,
        Message: "Client add Successfully",
      });
    }
  });
};
// For View
const login = (req:any, res:any) => {
  console.log(req.body.mobile);

  let sql = `select * from users where mobile=${req.body.mobile}`;
  con.query(sql, function (err, result) {
    if (err) {
      res.send({
        Success: false,
        Message: err,
      });
      throw err;
    } else {
      console.log("Result: " + JSON.stringify(result));

      if (result.length > 0) {
        res.send({
          Success: true,
          Message: result,
        });
      } else {
        res.send({
          Success: false,
          Message: "User not found",
        });
      }
    }
  });
};

module.exports = {
  register,
  login,
};
