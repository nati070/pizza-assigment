import { Router, Request, Response } from "express";
import Pizza from "../models/Pizza";
import Restaurant from "../models/Restaurant";

const express = require("express");
const router: Router = express.Router();

const restaurant:Restaurant = new Restaurant([]);


//strart working by get the api
router.get("/",  (req: Request, res: Response) => {
    const list:Pizza[] = [];
    for(let i = 0 ; i < 5 ; i++){
        const p = new Pizza([1,2,1],i)
        list.push(p)
    }
    restaurant.setOrders(list);
  res.send("refresh!!");
});
module.exports = router;