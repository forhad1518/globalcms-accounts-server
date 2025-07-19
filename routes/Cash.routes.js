import express from "express";

const router = express.Router();

// Route to create cash entries
import { createCash } from "../controllers/Cash.post.js";
router.post('/cash', createCash);

// Route to get cash entries
import { getCash } from "../controllers/Cash.get.js";
router.get('/cash', getCash);

export default router;  