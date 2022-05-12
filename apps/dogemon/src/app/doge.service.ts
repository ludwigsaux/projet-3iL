import { Injectable } from '@angular/core';
import { Doge } from './doge';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DogeService {

  private dogesUrl='http://localhost:4000/api/creatures';

  constructor(
    private http: HttpClient
  ) { }

  getDoges(): Observable<Doge[]>{
    //const doges = of(DOGES);
    //return doges;
    return this.http.get<Doge[]>(this.dogesUrl)
  }

}
