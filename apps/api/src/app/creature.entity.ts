import path = require("path");
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Creature {
    @PrimaryGeneratedColumn()
    id_creature:number;

    @Column()
    image_path: string;

    @Column()
    name_creature: string    

    @Column()
    hp_creature: number;

    @Column()
    armor_creature: number;
}
