import { Controller, Get, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { User } from '../user.entity';
import { UsersService } from '../users/users.service';
import { CreatureService } from '../creature/creature.service';
import { Creature } from '../creature.entity';

@Controller('Gamebot')
export class GamebotController {

  constructor(private readonly usersService: UsersService, private readonly creatureService: CreatureService) {}

  @Post()
  create(): string {
    return 'This action adds a new game against a bot';
  }

  @Get()
  findAll(): string {
    return 'This action returns all games against a bot';
  }

  @Get('test')
  async getFightersData() {
    
    var creature:Creature;
    
    await this.usersService.getUser("admin").then((user:User) => {
      var test=this.creatureService.getOneById(user.dogemon);

      test.then((returnedCreature)=>{
        creature = returnedCreature;
        console.log(">>>>> creature dedans : ", creature);
      });
      test.catch();

      console.log(">>>>> creature après : ", creature);
    });
    return creature;
  } 
}