import express from "express";

import { ProductsController } from "../controllers/products.controller";

export const productsRouter = express.Router();

productsRouter.get('/', ProductsController.getAll);
