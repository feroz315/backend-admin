import mongoose from 'mongoose';
// import { products} from './data.js'
import express from "express";
import UserModal from './Modal/scheme.js'
import bcrypt from "bcrypt";



const app = express();
const PORT = process.env.PORT || 5000;
const db = "mongodb+srv://admin:admin@crudapp.df2etkh.mongodb.net/";


mongoose.connect(db)
mongoose.connection.on("connected", () => console.log("mongose connect"));
mongoose.connection.on("error", (err) => console.log("error mongo",err));


app.use(express.json());
app.use(express.urlencoded({ extended : true}));




app.get("/",((req,res)=> {
        res.json({
            message: "Server is new change"
        })
}))

app.post("/api/signup", async(req,res) => {
try {
    const { email,password,firstname } = req.body;
    if(!email || !password || !firstname){
        res.json({
            message: "invaild email & password !"
        })
        return
    }

const emailExit = await UserModal.findOne({ email })
if( emailExit !== null ){
    res.json({
        message: "email is already exit"
    })
    return
}

const hashPass = await bcrypt.hash(password, 10)
const obj = {
    ...req.body,
    password: hashPass
};

const respone = await UserModal.create(obj)
console.log(respone, "respone")
res.json({
    message : "user successfully ",
    
});

} catch (error) {
    res.json({
        message: error.message
    });
}


})





// app.post("/createuser",((req,res) => {
//     console.log("user",req.body)
//     res.send("create user")
// })) 

// app.get("/createuser",((req,res) => {
//         res.send("get user")
// }))

// app.put("/createuser",((req,res) => {
//         res.send("update user")
// })) 

// app.delete("/createuser",((req,res) => {
//     res.send("delete user")
// })) 

app.listen(PORT, ((req,res)=> {
    console.log("hi")
}))
