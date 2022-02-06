import { Router, Request, Response } from "express";
import Pizza from "../models/pizza";
import Restaurant from "../models/restaurant";

const express = require("express");
const router: Router = express.Router();

const restaurant:Restaurant = new Restaurant([]);



router.get("/", async (req: Request, res: Response) => {
    console.log("hey")
    const list:Pizza[] = [];
    for(let i = 0 ; i < 5 ; i++){
        const p = new Pizza([],i)
        list.push(p)
    }
    await restaurant.setOrders(list);
  res.send("hello");
});
module.exports = router;