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
    //this.creatureService.createCreature("droopy",'apps/image/droopy.jpg',100, 20);
    //this.creatureService.createCreature("scooby-doo",'apps/image/scooby.jpg',80, 30);  
    //this.creatureService.createCreature("brian",'apps/image/brian.png',60, 20);  
    this.creatureService.createCreature("clembapt",'apps/image/brian.png',60, 20);
  }

    @Get('creatures')
        async getCreatures(): Promise<Creature[]>{
        return this.creatureService.getAll();
    }
}