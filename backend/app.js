const express=require("express");
const app=express();
app.use(express.json());
require("./db/conn");
const User=require("./model/Schema");

app.use(require("./router/auth"));
app.listen(5000,()=>{
    console.log("Run on port number 5000");
});
