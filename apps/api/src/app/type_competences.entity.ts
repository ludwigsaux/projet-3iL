import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeCompetence {
    @PrimaryGeneratedColumn()
    idTypeCompetence:number;

    @Column()
    libelle: string;
}