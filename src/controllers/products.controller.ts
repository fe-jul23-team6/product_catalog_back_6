import { ProductsService } from "../services/products.service";
import { ControllerAction } from "../types/controllerAction";
import codeStatus from "../constants/codeResponses";
import { QueryModel } from "../types/queryModel";

const getAll: ControllerAction = async (req, res) => {
  const query: QueryModel = req.query;
  const ids = req.query.ids;

  const products = await ProductsService.getAllByQuery(query);

  if (ids) {
    const preparedIds = ids.toString().split(',').map(id => Number(id));

    if (preparedIds.length === 0) {
      res.send([]);
    } else {
      const products = await ProductsService.getByIds(preparedIds);
      res.send(products);
    }
    return;
  }

  res.send(products);
};

const getOneById: ControllerAction = async (req, res) => {
  const product = await ProductsService.getById(req.params.id);

  if (!product) {
    res.sendStatus(codeStatus.NOT_FOUND);

    return;
  }

  res.send(product);
}

const getDiscount: ControllerAction = async (req, res) => {
  const products = await ProductsService.getDiscount();

  res.send(products);
};

export const ProductsController = {
  getAll,
  getOneById,
  getDiscount,
}
