import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Creature {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    hp: number;

    @Column()
    armor: number;
}