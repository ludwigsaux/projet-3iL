import { Component, OnInit } from '@angular/core';
import { Doge } from '../doge';
import { DOGES } from '../mock-doges';

@Component({
  selector: 'app-doges',
  templateUrl: './doges.component.html',
  styleUrls: ['./doges.component.css']
})
export class DogesComponent implements OnInit {

  doges = DOGES;
  selectedDoge?: Doge;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(doge: Doge): void {
    this.selectedDoge = doge;
  }

}
