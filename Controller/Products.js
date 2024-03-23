
import { DATABASE_URL } from '../DBConnect/DBConnect.js';
import mongoose from 'mongoose';
import ProductItem from "../Modal/ProductScheme.js";
import { products } from "../product.js";
import cors from "cors";
import express from "express";



mongoose.connect(DATABASE_URL)
mongoose.connection.on("connected", () => console.log("mongose connect"));
mongoose.connection.on("error", (err) => console.log("error mongo", err));

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// get all products api
const getAllProducts = async (req, res) => {
    try {
        console.log("all products", req.query)
        if(req.query.id){
           const filterdata = products.filter((product) => product.id == req.query.id);    
            res.send(filterdata);
            return;
        }
        //    res.send(products);


       
        const Items = await ProductItem.create(products)
        res.status(200).json({
            message: "Successfully Connect",

        })

        // const DataAPI = await ProductItem.find({})
        // res.status(200).json({ DataAPI });


    } catch (error) {
        res.status(400).json({
            message: error.message,
        })

    }

};




export { getAllProducts };