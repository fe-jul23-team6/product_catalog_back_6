import { ProductsService } from "../services/products.service";
import { ControllerAction } from "../types/controllerAction";

const getAll: ControllerAction= async(req, res) => {
  const {
    offset = '0',
    limit = '10',
  } = req.query;

  if (
    typeof offset !== 'string'
    || typeof limit !== 'string'
  ) {
    res.sendStatus(422);
    return;
  }

  const products = await ProductsService.getAll({ 
    offset: +offset,
    limit: +limit
  });

  res.send(products);
};

export const ProductsController = {
  getAll,
}
