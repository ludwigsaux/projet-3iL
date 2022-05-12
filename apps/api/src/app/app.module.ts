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

@Module({
  imports: [
      TypeOrmModule.forRoot(config), 
      TypeOrmModule.forFeature([Creature]),
      TypeOrmModule.forFeature([Competence])
  ],
  controllers: [AppController, CreatureController, CompetenceController],
  providers: [AppService, CreatureService, CompetenceService],
})
export class AppModule {}
