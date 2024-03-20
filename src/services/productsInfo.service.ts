'use strict';

import { ProductInfo } from '../models/productInfoModel';
import { Product } from '../models/productModel';

const getDetailsInfoById = async (itemId: string) => {
  const data = await Product.findOne({
    where: { itemId },
    attributes: ['id'],
    include: [{ model: ProductInfo, required: true }],
  });

  return data;
};

export const ProductsInfoService = {
  getDetailsInfoById,
};
