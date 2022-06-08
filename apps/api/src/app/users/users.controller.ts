import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Creature } from '../creature.entity';
import { UsersService } from '../users/users.service';

@Controller('Users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Put('changeCreature')
        async setCreatures(@Body() creature:Creature): Promise<void>{
            console.log("Request to change creature : ", creature);
            this.usersService.changeCreature(creature.idCreature);
        }

}