import { Table, Column, Model} from 'sequelize-typescript';

@Table({
  tableName: 'phones',
  modelName: 'Phone',
  timestamps: false,
})
export class Phone extends Model {
  @Column
		category: string;

  @Column
		phoneId: string;

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
