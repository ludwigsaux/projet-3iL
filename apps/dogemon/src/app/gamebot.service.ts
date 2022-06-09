import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Doge } from './doge';

@Injectable()

export class GameBotService {

  private dogesUrl='http://localhost:4000/api/Gamebot/creatures';

    constructor(
      private http: HttpClient
    ) { }

    getDoges(): Observable<Doge>{
      //const doges = of(DOGES);
      //return doges;
      console.log('test',this.http.get<Doge>(this.dogesUrl))
      return this.http.get<Doge>(this.dogesUrl)
      
    }
  }
  