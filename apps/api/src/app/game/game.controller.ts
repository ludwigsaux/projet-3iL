import { Controller, Get, Post } from '@nestjs/common';

@Controller('Game')
export class GameController {
  @Post()
  create(): string {
    return 'This action adds a new game';
  }

  @Get()
  findAll(): string {
    return 'This action returns all games';
  }
}