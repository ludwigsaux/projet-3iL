import path = require("path");
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Competence } from "./competence.entity";

@Entity()
export class Creature {
    @PrimaryGeneratedColumn()
    idCreature: number;

    @Column()
    imagePath: string;

    @Column()
    nameCreature: string;    

    @Column()
    hpCreature: number;

    @Column()
    armorCreature: number;

    @Column()
    firstSkill: string;

    @Column()
    secondSkill: string;

    @Column()
    thirdSkill: string;
}
