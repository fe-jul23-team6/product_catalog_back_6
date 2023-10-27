import { Phone } from "../models/phoneModel";
import { PaginationModel } from "../types/pagination";

const getAll = async() => {
  const products = await Phone.findAll();

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

  const products = await Phone.findAndCountAll(properties);

  return products;
};

const getById = async(id: string) => {
  const product = await Phone.findByPk(id);

  return product;
};

export const ProductsService = {
  getAll,
  getById,
  getAllByQuery,
};