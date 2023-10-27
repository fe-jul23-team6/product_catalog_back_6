import { Phone } from "../models/phoneModel";

const getAll = async() => {
  const products = await Phone.findAll();

  return products;
};

const getById = async(id: string) => {
  const product = await Phone.findByPk(id);

  return product;
}

export const ProductsService = {
  getAll,
  getById,
};