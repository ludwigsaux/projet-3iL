import { BadRequestException, Injectable } from '@nestjs/common';
import { Message } from '@dogemon/api-interfaces';
import { InjectRepository } from '@nestjs/typeorm';
import { Creature } from '../creature.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreatureService {
  constructor(
  @InjectRepository(Creature)
  private creatureRepository: Repository<Creature>,)
  {}

  getAll(): Promise<Creature[]>{
    return this.creatureRepository.find(); //SELECT * from creature
  }

  getOneById(id_creature:number): Promise<Creature>{
    return this.creatureRepository.findOneOrFail(id_creature);
  }

  getOneByName(name_creature:string): Promise<Creature>{
      return this.creatureRepository.findOneOrFail(name_creature)
  }

  createCreature(name_creature:string,image_path: string, hp_creature:number, armor_creature: number): Promise<Creature>{
    const newCreature = this.creatureRepository.create({name_creature,image_path, hp_creature, armor_creature});
    return this.creatureRepository.save(newCreature)
  }
    
}
