import express from "express";

import { ProductsController } from "../controllers/products.controller";
import { ProductsInfoController } from "../controllers/productsInfo.controller";

export const productsRouter = express.Router();

productsRouter.get('/', ProductsController.getAll);
productsRouter.get('/:id', ProductsInfoController.getDetailsInfoById);
