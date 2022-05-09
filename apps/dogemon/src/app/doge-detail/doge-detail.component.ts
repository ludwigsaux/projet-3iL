import { Component, Input, OnInit } from '@angular/core';
import { Doge } from '../doge';

@Component({
  selector: 'app-doge-detail',
  templateUrl: './doge-detail.component.html',
  styleUrls: ['./doge-detail.component.css']
})
export class DogeDetailComponent implements OnInit {

  @Input() doge?: Doge;

  constructor() { }

  ngOnInit(): void {
  }

}
