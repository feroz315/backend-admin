
import { products } from "../data.js";


const getAllProducts = async(req,res) => {
    res.status(200).json({
        data: products
    })

};


const getAllProductsTesting = async(req,res) => {
    res.status(200).json({
        message: "get all product testing"
    })
};



export { getAllProducts, getAllProductsTesting };