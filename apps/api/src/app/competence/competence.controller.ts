import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { CompetenceService } from './competence.service';
import { Competence } from '../competence.entity';


@Controller()
export class CompetenceController {

constructor(private readonly competenceService: CompetenceService) {}

    @Get('createcompetence')
    async setCompetence(): Promise<void>{
        this.competenceService.createCompetence("Grogner", 5);
        this.competenceService.createCompetence("Morsure", 20);
    }

    @Get('competences')
        async getCompetence(): Promise<Competence[]>{
        return this.competenceService.getAll();
    }
}