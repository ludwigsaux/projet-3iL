import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Competence {
    @PrimaryGeneratedColumn()
    id_competence:number;

    @Column()
    name_competence: string;

    @Column()
    damage_competence: number;
}