import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  
  userName!: string;
  password!: string;
  formData!: FormGroup;

  
  constructor() {}

  ngOnInit(){
    this.formData = new FormGroup({
    

  });

}
}