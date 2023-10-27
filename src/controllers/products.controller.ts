import { ProductsService } from "../services/products.service";
import { ControllerAction } from "../types/controllerAction";
import codeStatus from "../constants/codeResponses";

const getAll: ControllerAction = async(req, res) => {
  const products = await ProductsService.getAll();

  res.send(products);
};

const getOneById: ControllerAction = async(req, res) => {
  const product = await ProductsService.getById(req.params.id);

  if (!product) {
    res.sendStatus(codeStatus.NOT_FOUND);

    return;
  }

  res.send(product);
}

export const ProductsController = {
  getAll,
  getOneById,
}
