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

  getOneById(idCreature:number): Promise<Creature>{
    return this.creatureRepository.findOneOrFail(idCreature);
  }

  getOneByName(nameCreature:string): Promise<Creature>{
      return this.creatureRepository.findOneOrFail(nameCreature)
  }

  createCreature(nameCreature:string,imagePath: string, hpCreature:number, armorCreature: number): Promise<Creature>{
    const newCreature = this.creatureRepository.create({nameCreature,imagePath, hpCreature, armorCreature});
    return this.creatureRepository.save(newCreature)
  }
    
}
