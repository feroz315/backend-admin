 import 'dotenv/config';
// require('dotenv').config();

import mongoose from 'mongoose';
import express from "express";
import cors from "cors";
import routes from './Routes/Routes.js';


const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DATABASE_URL;
console.log(DB_URL);


mongoose.connect(DB_URL)
mongoose.connection.on("connected", () => console.log("mongose connect"));
mongoose.connection.on("error", (err) => console.log("error mongo", err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//middleware as routes api
app.use("/api", routes);



app.get("/", ((req, res) => {
    res.json({
        message: "Server is new change"
    })
}))



app.listen(PORT, () => {
    console.log(`Server is running on localhost://${PORT}`)
})
