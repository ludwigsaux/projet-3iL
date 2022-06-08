import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  fuite(): void{
    this.champInformation = "Fuite impossible looser !"
  }

  sac(): void{
    this.champInformation = "Aucun objet dans le sac !"
  }
}
