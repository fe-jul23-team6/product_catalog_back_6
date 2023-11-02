'use strict';

import { ProductsInfoService } from "../services/productsInfo.service";
import { ControllerAction } from "../types/controllerAction";
import codeStatus from "../constants/codeResponses";


const getDetailsInfoById: ControllerAction = async(req, res) => {
  const { id } = req.params;
  const product = await ProductsInfoService.getDetailsInfoById(id);

  if (!product) {
    res.sendStatus(codeStatus.NOT_FOUND);

    return;
  }

  res.send(product);
};

export const ProductsInfoController = {
  getDetailsInfoById,
};
