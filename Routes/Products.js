import express from "express";
const router = express.Router();
import { getAllProducts } from "../Controller/Products.js";



router.route("/").get(getAllProducts);



export default router;