import { ProductInfo } from "../models/productInfoModel";

const getDetailsInfoById = async (id: string) => {
  const product = await ProductInfo.findOne({ where: { id } });

  return product;
};

export const ProductsInfoService = {
  getDetailsInfoById,
};
