import mongoose from 'mongoose';
// import { products} from './data.js'
import express from "express";


const app = express();
const PORT = process.env.PORT || 5000;
const db = "mongodb+srv://admin:admin@crudapp.ncgm6eu.mongodb.net/";


mongoose.connect(db)
mongoose.connection.on("connected", () => console.log("mongose connect"));
mongoose.connection.on("error", (err) => console.log("error mongo",err));


app.use(express.json());
app.use(express.urlencoded({ extended : true}));




app.get("/",((req,res)=> {
        res.json({
            message: "Server is update"
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
