import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'joueur1',
        password: 'securite',
      },
      {
        userId: 2,
        username: 'joueur2',
        password: 'security',
      },
      {
        userId: 3,
        username: 'joueur3',
        password: 'safety',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}