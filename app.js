import mongoose from 'mongoose';
import { products} from './data.js'
import express from "express";


const app = express();
const PORT = process.env.PORT || 5000;
const db = "mongodb+srv://admin:admin@crudapp.ncgm6eu.mongodb.net/"


mongoose.connect(db)
mongoose.connection.on("connected", () => console.log("mongose connect"));
mongoose.connection.on("error", (err) => console.log("error mongo",err));

// .then((res) => console.log("mongo db connect"))
// .catch((error)=> console.log("err",error))


app.use(express.json());
app.use(express.urlencoded({ extended : true}));




app.get("/",((req,res)=> {
        res.send("server on")
}))

// app.get("/allproduct", ((req,res) => {
//     console.log("respone", req.query)
//     if(req.query.id){
//     const filterdata = products.filter((product) => 
//             product.id == req.query.id
//         );
//         res.send(filterdata)
//         return;
//     }
//     res.send(products);
// }));

// app.get("/product/:id",((req,res)=> {
//         console.log(req.params.id,"params");
//         res.send("single product")
// }))

app.post("/createuser",((req,res) => {
    console.log("user",req.body)
    res.send("create user")
})) 

app.get("/createuser",((req,res) => {
        res.send("get user")
}))

app.put("/createuser",((req,res) => {
        res.send("update user")
})) 

app.delete("/createuser",((req,res) => {
    res.send("delete user")
})) 

app.listen(PORT, ((req,res)=> {
    console.log("hi")
}))
