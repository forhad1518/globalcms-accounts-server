import { createCash } from "../controllers/Cash.controllers.js";
import express from "express";

const router = express.Router(); 

// Route to create cash entries
router.post('/cash', createCash);


export default router;  