import { Component, OnInit } from '@angular/core';
import { Doge } from '../doge';
import { DogeService } from '../doge.service';

@Component({
  selector: 'app-doges',
  templateUrl: './doges.component.html',
  styleUrls: ['./doges.component.css']
})
export class DogesComponent implements OnInit {

  doges: Doge[] = [];
  selectedDoge?: Doge;
  clicked:boolean =false;

  constructor(private dogeService: DogeService) { }

  ngOnInit(): void {
    this.getDoges();
  }

  onSelect(doge: Doge): void {
    this.selectedDoge = doge;
    console.log(this.selectedDoge)
  }

  getDoges():void{
    this.dogeService.getDoges()
      .subscribe(doges => this.doges = doges);
  }

  onClick():void{
    console.log("On click",this.selectedDoge);
    this.dogeService.modifyDoges(this.selectedDoge).subscribe(() => this.clicked = true);
  }

}
