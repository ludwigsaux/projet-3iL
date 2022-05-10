import { Injectable } from '@angular/core';
import { Doge } from './doge';
import { DOGES } from './mock-doges';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DogeService {

  constructor() { }

  getDoges(): Observable<Doge[]>{
    const doges = of(DOGES);
    return doges;
  }

}
