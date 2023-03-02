import express from "express";
import ProductManager from "../service/classProduct.js";

const router = express.Router()

const pm = new ProductManager();

router.get('/', (req, res)=>{
    res.render('index')
});

router.get("/home", async (request, response) => {   
    let products = await pm.getProduct()  
    response.render("home", {products})
});

router.get("/realtimeproducts", async (request, response) =>{
    let products = await pm.getProduct()      
    response.render("realTimeProducts", {products})
});



export default router;