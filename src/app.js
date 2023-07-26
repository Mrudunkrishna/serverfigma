const express=require("express");
const mongoose=require("mongoose");

const User=require("./models/schema");
const dotenv=require("dotenv");



const app = express();
const authRouter=express.Router();
var status=false;

const middleware=(req,res,next)=>{
    status=false;
    const {password}=req.body
    if(password=='1234'){
        status=true;
        res.send("login sucsess")
    }
    else{
        res.send("login failure")
    }

    // console.log("this is middleware")
    // next();
}
dotenv.config();
app.use(express.json());




app.post("/login",(req,res)=>{

    const user=User.findOne({email:req.body.email}).then((usr)=>{
       if(usr){
        res.send("email already present");
       }
       else{
        const user=new User({
                    name: req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                });
      user
.save()
.then(()=>{
    res.send("saved user");
})
.catch((error)=>{
    res.send("user not saved");
});
       }

    })



//     const user=new User({
//         name: req.body.name,
//         email:req.body.email,
//         password:req.body.password,
    // });


// user
// .save()
// .then(()=>{
//     res.send("saved user");
// })
// .catch((error)=>{
//     res.send("user not saved");
// });
});


app.post("/log",(req,res)=>{

    const user=User.findOne({email:req.body.email,password:req.body.password}).then((usr)=>{
       if(usr){
        res.send("login sucsess");
       }
       else{
       res.send("check mail or pass")
                
            }
        });
//       user
// .save()
// .then(()=>{
//     res.send("saved login");
// })
// .catch((error)=>{
//     res.send("login not saved");
// });
//        }

//     })

});
// app.get("/",(req,res)=>{
//         res.send("ok");
//     })
    
// app.post("/login",
// // (req,res,next)=>{console.log("before")
// //     next();console.log("befre2")},
//    middleware, (req,res)=>{
//         res.send("mrhz")
//         console.log("after")  })
 

//     app.post("/",(req,res)=>{
//        res.send(req.body);
//        console.log(req.body);
//     })


mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("connected db successfully");
}).catch((error)=>{
    console.log("connected db failure",error);
})


app.listen(8000,()=>{
    console.log("server listening at 8000");
})