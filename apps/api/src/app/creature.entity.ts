import path = require("path");
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Creature {
    @PrimaryGeneratedColumn()
    idCreature: number;

    @Column()
    imagePath: string;

    @Column()
    nameCreature: string    

    @Column()
    hpCreature: number;

    @Column()
    armorCreature: number;
}
