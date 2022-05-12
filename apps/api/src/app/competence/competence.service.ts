import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Competence } from '../competence.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompetenceService {
  constructor(
  @InjectRepository(Competence)
  private competenceRepository: Repository<Competence>,)
  {}

  getAll(): Promise<Competence[]>{
    return this.competenceRepository.find(); //SELECT * from competence
  }

  getOneById(idCompetence:number): Promise<Competence>{
    return this.competenceRepository.findOneOrFail(idCompetence);
  }

  getOneByName(nameCompetence:string): Promise<Competence>{
      return this.competenceRepository.findOneOrFail(nameCompetence);
  }

  createCompetence(nameCompetence: string, damageCompetence: number): Promise<Competence>{
    const newCompetence = this.competenceRepository.create({nameCompetence, damageCompetence});
    return this.competenceRepository.save(newCompetence);
  }
    
}
