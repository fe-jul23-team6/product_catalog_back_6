'use strict';

import { Table, Column, Model, ForeignKey, BelongsTo, AllowNull } from 'sequelize-typescript';
import { ProductInfo } from './productInfoModel';

@Table({
  tableName: 'products',
  modelName: 'Product',
  timestamps: false,
})
export class Product extends Model {
  @Column
  category: string;

  @Column
  phoneId: string;

  @BelongsTo(() => ProductInfo)
  productInfo: ProductInfo

  @ForeignKey(() => ProductInfo)
  @AllowNull(false)
  @Column
  itemId: string;

  @Column
  name: string;

  @Column
  fullPrice: number;

  @Column
  price: number;

  @Column
  screen: string;

  @Column
  capacity: string;

  @Column
  color: string;

  @Column
  ram: string;

  @Column
  year: number;

  @Column
  image: string;
}
