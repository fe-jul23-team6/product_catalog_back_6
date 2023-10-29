import { ProductsService } from "../services/products.service";
import { ControllerAction } from "../types/controllerAction";
import codeStatus from "../constants/codeResponses";

const getAll: ControllerAction = async(req, res) => {
  const {
    page,
    limit,
    ids,
  } = req.query;

  if (page && limit) {
    const preparedProducts = await ProductsService.getAllByQuery(
      Number(page),
      Number(limit),
    );

    res.send(preparedProducts);

    return;
  }

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
