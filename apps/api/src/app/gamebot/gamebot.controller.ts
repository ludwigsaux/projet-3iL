import { Controller, Get, Post } from '@nestjs/common';

@Controller('Gamebot')
export class GamebotController {
  @Post()
  create(): string {
    return 'This action adds a new game against a bot';
  }

  @Get()
  findAll(): string {
    return 'This action returns all games against a bot';
  }
}