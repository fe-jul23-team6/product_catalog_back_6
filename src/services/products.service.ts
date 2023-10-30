import { FindOptions, Order } from "sequelize";
import { Product } from "../models/productModel";
import { QueryModel } from "../types/queryModel";

const getAllByQuery = async ({ 
  category,
  limit,
  page, 
  sortBy = 'id',
  orderDir = 'ASC',
}: QueryModel) => {
  const properties: FindOptions = {};

  if (sortBy) {
    const order: Order = [[sortBy, orderDir]];

    properties.order = order;
  }

  if (limit && page) {
    const offset = (Number(page) - 1) * Number(limit);

    properties.offset = offset;
    properties.limit = Number(limit);
  }

  if (category) {
    properties.where = {
      category: category,
    };
  }

  const products = await Product.findAll(properties);

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
  getById,
  getByIds,
  getAllByQuery,
};
