import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'dogemon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dogemon';

  isUserLoggedIn = false;

   constructor(private router: Router, private authService: AuthService) {}

   ngOnInit() {
      const storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else


         this.isUserLoggedIn = false;
    }

  }
