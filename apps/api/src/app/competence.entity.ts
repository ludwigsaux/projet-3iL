import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Competence {
    @PrimaryGeneratedColumn()
    idCompetence:number;

    @Column()
    nameCompetence: string;

    @Column()
    damageCompetence: number;
}