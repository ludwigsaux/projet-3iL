import { Component, OnInit } from '@angular/core';
import { Doge } from '../doge';
import { DOGES } from '../mock-doges';
import { DogeService } from '../doge.service';

@Component({
  selector: 'app-doges',
  templateUrl: './doges.component.html',
  styleUrls: ['./doges.component.css']
})
export class DogesComponent implements OnInit {

  doges: Doge[] = [];
  selectedDoge?: Doge;

  constructor(private dogeService: DogeService) { }

  ngOnInit(): void {
    this.getDoges();
  }

  onSelect(doge: Doge): void {
    this.selectedDoge = doge;
  }

  getDoges():void{
    this.dogeService.getDoges()
      .subscribe(doges => this.doges = doges);
  }

}
