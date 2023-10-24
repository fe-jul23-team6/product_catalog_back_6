import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'phones',
  modelName: 'Phone',
})
export class Phone extends Model {
  @Column(DataType.TEXT)
		category: string;

  @Column(DataType.TEXT)
		phoneId: string;

	@Column(DataType.TEXT)
		itemId: string;

	@Column(DataType.TEXT)
		name: string;

	@Column(DataType.FLOAT)
		fullPrice: number;

	@Column(DataType.FLOAT)
		price: number;

	@Column(DataType.TEXT)
		screen: string;

	@Column(DataType.TEXT)
		capacity: string;

	@Column(DataType.TEXT)
		color: string;

	@Column(DataType.TEXT)
		ram: string;

	@Column(DataType.INTEGER)
		year: number;

	@Column(DataType.TEXT)
		image: string;
}
