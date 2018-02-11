import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Data {

	@PrimaryGeneratedColumn()
	public id: number;

	@Column({ type: 'text' })
	@IsNotEmpty()
	public title: string;

	@Column({ type: 'text' })
	@IsNotEmpty()
	public text: string;

	constructor(title: string, text: string) {
		this.title = title;
		this.text = text;
	}

}
