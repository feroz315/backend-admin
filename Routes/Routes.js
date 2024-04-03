import express from "express";
const routes = express.Router();
import { getAllProducts } from "../Controller/Products.js";
import { UserSignup,UserLogin } from "../Controller/Auth.js";


routes.route("/products").get(getAllProducts);
routes.route("/signup").post(UserSignup);
routes.route("/login").post(UserLogin);

// routes.post("/signup", UserSignup);
// routes.post("/login", UserLogin);






export default routes;