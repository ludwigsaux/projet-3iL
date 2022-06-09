import { Component, OnInit } from '@angular/core';
import { GameBotService } from '../gamebot.service';
import { Doge } from '../doge';

@Component({
  selector: 'dogemon-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css'],
})

export class CombatComponent implements OnInit {

  nomNotreCreature = "scooby";
  creatureEnnemi = "noopy";
  pvNotreCreature = 60;
  pvMaxNotreCreature = 100;
  pvCreatureEnnemi = 40;
  champInformation = "Début du combat ! ";

  doges: Doge[] = [];

  constructor(private gamebotService: GameBotService) {}

  ngOnInit(): void {
    this.getDoges();
    console.log(this.getDoges())
  }

  fuite(): void{
    this.champInformation = "Fuite impossible looser !"
  }

  sac(): void{
    this.champInformation = "Aucun objet dans le sac !"
  }

  getDoges():void{
    this.gamebotService.getDoges();
  }

}
