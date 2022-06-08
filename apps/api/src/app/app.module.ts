import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig'

import { Creature } from './creature.entity';
import { CreatureController } from './creature/creature.controller';
import { CreatureService } from './creature/creature.service';
import { Competence } from './competence.entity';
import { CompetenceController } from './competence/competence.controller';
import { CompetenceService } from './competence/competence.service';
import { User } from './user.entity';
import { GamebotController } from './gamebot/gamebot.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
      TypeOrmModule.forRoot(config), 
      TypeOrmModule.forFeature([Creature]),
      TypeOrmModule.forFeature([Competence]),
      TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController, CreatureController, CompetenceController, GamebotController],
  providers: [AppService, CreatureService, CompetenceService, UsersService],
})
export class AppModule {}
