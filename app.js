const express =require('express');
const bodyparser =require('body-parser');
const request=require('request');
const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/Signup.html")

})
app.post("/",function(req,res){
  var fname=req.body.fname;
  var lname=req.body.lname;
  var email=req.body.email;
  console.log(fname,lname,email);
  res.send("You are signed in succesfully.")
})
app.listen(3000,function(){
  console.log("The Server is running on port 3000.");
})
