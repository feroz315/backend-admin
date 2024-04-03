import express from "express";
const routes = express.Router();
import { getAllProducts } from "../Controller/Products.js";
import { UserSignup,UserLogin } from "../Controller/Auth.js";


routes.get("/api/products", getAllProducts);
routes.post("/api/signup", UserSignup);
routes.post("/api/login", UserLogin);






export default routes;