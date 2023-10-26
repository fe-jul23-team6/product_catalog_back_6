import { ProductsService } from "../services/products.service";
import { ControllerAction } from "../types/controllerAction";

const getAll: ControllerAction= async(req, res) => {
  const products = await ProductsService.getAll();

  res.send(products);
};

export const ProductsController = {
  getAll,
}
