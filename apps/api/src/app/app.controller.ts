import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

import { Message } from '@dogemon/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  truc(){
    console.log('test')
  }


}