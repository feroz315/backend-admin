import mongoose from "mongoose";


const ProductScheme = new mongoose.Schema({

   "title":{
      type: String,
      required : true  
    },
    "price": {
        type: Number,
        required: [ true, "Price must be provided"]
    },
    "description":{
        type: String,
        required: true
    },
    "category":{
        type: String,
        required: true
    },
  
    "rating":{
       type: Number,
       default: 4.9,
       
 }
});


const ProductItem = mongoose.model("Product", ProductScheme);
export default ProductItem;