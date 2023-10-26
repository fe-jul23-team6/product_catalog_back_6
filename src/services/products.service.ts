import { Phone } from "../models/phoneModel";

const getAll = async() => {
  const products = await Phone.findAll();

  return products;
};

export const ProductsService = {
  getAll,
};