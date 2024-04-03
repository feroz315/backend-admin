import express from "express";
const routes = express.Router();
import { getAllProducts } from "../Controller/Products.js";
import { UserSignup } from "../Controller/Auth.js";


routes.get("/products", getAllProducts);
routes.post("/signup", UserSignup);
// routes.post("/login", UserLogin);






export default routes;