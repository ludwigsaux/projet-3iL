import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

import { Message } from '@dogemon/api-interfaces';

import { CreatureService } from './creature.service';
import { Creature } from '../creature.entity';

@Controller()
export class CreatureController {


constructor(private readonly creatureService: CreatureService) {}

@Get('createcreature')
  async setCreatures(): Promise<void>{
    this.creatureService.createCreature("bouvier",'assets/img/bouvier.png',100, 20,2);
    this.creatureService.createCreature("scooby-doo",'assets/img/scooby.png',80, 30,1);  
    this.creatureService.createCreature("brian",'assets/img/brian.png',60, 20,3);  
    this.creatureService.createCreature("dalmatien",'assets/img/dalmatien.png',60, 20,1);
  }

    @Get('creatures')
        async getCreatures(): Promise<Creature[]>{
        return this.creatureService.getAll();
    }
}