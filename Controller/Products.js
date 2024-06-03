
import ProductItem from "../Modal/ProductScheme.js";
import { products } from "../product.js";



// get all products api
const getAllProducts = async (req, res) => {
    try {
        console.log("all products", req.query)
        if(req.query.id){
           const filterdata = products.filter((product) => product.id == req.query.id);    
            res.send(filterdata);
            return;
         }
          res.send(products);


        // await ProductItem.deleteMany();           
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



const getSingleProduct = (req,res) => {
    const singleProduct = products.find((product) => product.id == +req.params.id) 
    console.log("singleproduct",singleProduct)
    res.send(singleProduct)

}





export { getAllProducts, getSingleProduct };