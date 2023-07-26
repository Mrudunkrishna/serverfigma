const mongoose=require("mongoose");

const schema=new mongoose.Schema({
name: {
    type:String,
},
email: {
    type:String,
},
password: {
    type:String,
},
});

const User=mongoose.model("PEOPLE",schema);
module.exports=User;