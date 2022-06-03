var express = require("express")
var bodyParser = require("body-parser")
var mongoose= require("mongoose")


const app= express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/mydb");
var db= mongoose.connection;

app.post("/signup",(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var username=req.body.Username;
    var password=req.body.password;

    var data={
        "name" : name,
        "email": email,
        "username": username,
        "password": password

    }
    db.collection("users").insertOne(data,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("sucessfully Registered");
    })
    return res.redirect("index.html")
})

app.get("/",(req,res) => {
    res.set({
        "allow-acess-all" :"*"
    })
    return res.redirect("index.html");

}).listen(3001);

console.log("listen on port 3001");