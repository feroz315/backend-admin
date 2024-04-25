import express from "express";
const routes = express.Router();
import { getAllProducts,getSingleProduct } from "../Controller/Products.js";
import { UserSignup,UserLogin } from "../Controller/Auth.js";
import { authMiddleware } from "../Middlewares/index.js";



routes.get("/products", getAllProducts,authMiddleware);
routes.get("/products/:id", getSingleProduct);
routes.post("/signup", UserSignup);
routes.post("/login", UserLogin);







export default routes;