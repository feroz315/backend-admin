import express from "express";
const routes = express.Router();
import { getAllProducts,getSingleProduct } from "../Controller/Products.js";
import { UserSignup,UserLogin } from "../Controller/Auth.js";



routes.get("/products", getAllProducts);
routes.get("/products/:id", getSingleProduct);
routes.post("/signup", UserSignup);
routes.post("/login", UserLogin);







export default routes;