import mongoose from "mongoose";


const ProductScheme = new mongoose.Schema({

   "title": String,  
   "description": String,
   "category": String,
   "id": String,
   "price": {
        type: Number,
        required: [ true, "Price must be provided"]
    },
    
});




const ProductItem = mongoose.model("Product", ProductScheme);
export default ProductItem;