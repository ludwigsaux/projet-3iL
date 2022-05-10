import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';


import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://rhesmdzy:ye5V3gLsHRWj7xQxqJTPX7tbF0JF8AFV@tai.db.elephantsql.com/rhesmdzy',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}