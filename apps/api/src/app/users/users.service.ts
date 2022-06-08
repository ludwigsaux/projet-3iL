import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Creature } from '../creature.entity';
import { User } from '../user.entity';


@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor( @InjectRepository(User)
  private userRepository: Repository<User>)
  {} 
  


  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  getUser(username:string): Promise<User | undefined>{
    return this.userRepository.findOneOrFail(username)
}
  
  changeCreature(creatureId:number){
    this.getUser('1').then((user:User) => {
      user.dogemon = creatureId;
      
     this.userRepository.save(user);
     console.log("user saved : ", user);
    });
  }
}