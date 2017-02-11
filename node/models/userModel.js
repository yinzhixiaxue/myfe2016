var db=require('./db');
exports.get_name_by_pass=function(username,password,callback){
  var sql="select * from t_user where username=? and password=?";
    db.query(sql,[username,password],callback);
};
