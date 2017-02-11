var userModel=require('../models/userModel');
exports.login=function(req,res,next){
    res.render('login');
};
exports.adminIndex=function(req,res,next){
    res.render('adminIndex',{
        user : req.session.loginedUser
    });
};
exports.reg=function(req,res,next){
    res.render('reg');
};
exports.dologin=function(req,res,next){
    var username=req.body.username;
    var password=req.body.password;
    userModel.get_name_by_pass(username,password,function(result){
        if(result.length>0){
            var user=result[0];
            req.session.loginedUser=user;
            res.redirect('/adminIndex');
        }else{
            res.redirect('/login');
        }
    });
};
