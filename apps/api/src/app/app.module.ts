import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig'

import { Creature } from './creature.entity';
import { CreatureController } from './creature/creature.controller';
import { CreatureService } from './creature/creature.service';

@Module({
  imports: [
      TypeOrmModule.forRoot(config), 
      TypeOrmModule.forFeature([Creature])
  ],
  controllers: [AppController, CreatureController],
  providers: [AppService, CreatureService],
})
export class AppModule {}
