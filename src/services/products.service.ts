import { FindOptions, Op, Order } from "sequelize";
import { Product } from "../models/productModel";
import { QueryModel } from "../types/queryModel";
import { sequelize } from "../connectDB";
import { DEFAULT_ORDER, DEFAULT_SORT } from "../constants/constants";

const getAllByQuery = async ({
  category,
  limit,
  page,
  sortBy = 'id',
  orderDir = 'ASC',
}: QueryModel) => {
  const properties: FindOptions = {};

  if (sortBy) {
    const order: Order = [[sortBy, orderDir], [DEFAULT_SORT, DEFAULT_ORDER]];

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

  const products = await Product.findAndCountAll(properties);

  return products;
};

const getById = async (id: string) => {
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

const getDiscount = async () => {
  const products = await Product.findAll({
    order: [[sequelize.literal('"fullPrice" - "price"'), 'DESC']],
    limit: 16,
  });

  return products;
};

const getNewModels = async () => {
  const products = await Product.findAll({
    order: [['year', 'DESC']],
    limit: 16,
  });

  return products;
};

const getRecomendedProducts = async (id: string, price: number) => {
  const searchQuery = id.split('-');

  const products = await Product.findAll({
    where: {
      [Op.and]: [
        {
          itemId: {
            [Op.ne]: id,
            [Op.like]: '%' + searchQuery[1] + '%',
          },
        },
        {
          price: {
            [Op.between]: [price - 150, price + 150],
          },
        },
      ],
    },
    limit: 10,
  });

  return products;
};


export const ProductsService = {
  getById,
  getByIds,
  getAllByQuery,
  getDiscount,
  getNewModels,
  getRecomendedProducts,
};
