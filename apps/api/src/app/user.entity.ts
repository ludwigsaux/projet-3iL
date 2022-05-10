import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id_user:number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    number_played: number;

    @Column()
    number_win: number;
}