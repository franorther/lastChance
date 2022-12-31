import { Request, Router, Response } from "express";
import { getItem, getItems, postItem, updateItem, deleteItem } from "../controllers/item";


const router = Router();

//router.get("/", getItem);
router.get("/", getItems);
router.post("/", postItem);
router.put("/", updateItem);
router.delete("/", deleteItem);
export { router };