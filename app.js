import 'dotenv/config';

import mongoose from 'mongoose';
import express from "express";
import cors from "cors";
import routes from './Routes/Routes.js';
// import { DATABASE_URL } from './DBConnect/DBConnect.js';

// import UserModal from '../Modal/scheme.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModal from './Modal/scheme.js';


const app = express();
const PORT = 5000;
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


app.post("/api/login" ,async(req,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.json({
                message: "required fields are missing!",
                data: null,
                status: false,

            });
            return;
        }

        const checkemail = await UserModal.findOne({ email });
        if (!checkemail) {
            res.status(400).json({
                message: "invaild email & password"
            });
            return;
        }

        const comparepass = await bcrypt.compare(password, checkemail.password);
        if (!comparepass) {
            res.status(400).json({
                message: "invaild email & password"
            });
            return;
        }
        const obj = {
            email: checkemail.email,
            _id: checkemail._id,
            firstname: checkemail.firstname,
            lastname: checkemail.lastname,
        }      

        const token = jwt.sign(obj, "PAK")
        res.json({
            message: "Successfully Login",
            data: checkemail,
            status: true,
            token
        });

    } catch (error) {
        res.json({
            message: error.message
        })
    }
})







app.get("/", ((req, res) => {
    res.json({
        message: "Server is new change"
    })
}))



app.listen(PORT, () => {
    console.log(`Server is running on localhost://${PORT}`)
})
