import { Product } from "../models/productModel";
import { PaginationModel } from "../types/pagination";

const getAll = async() => {
  const products = await Product.findAll();

  return products;
};

const getAllByQuery = async(
  page: number, 
  limit: number,
) => {
  const offset = (page - 1) * limit;
  const properties: PaginationModel = {
    offset,
    limit,
  }

  const products = await Product.findAndCountAll(properties);

  return products;
};

const getById = async(id: string) => {
  const product = await Product.findByPk(id);

  return product;
};

const getByIds = (ids: number[]) => {
  return Product.findAll({
    where: {
      id: ids,
    }
  })
};

export const ProductsService = {
  getAll,
  getById,
  getByIds,
  getAllByQuery,
};
