import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-deconnexion',
   templateUrl: './deconnexion.component.html',
   styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {

   constructor(private authService : AuthService, private router: Router) { }

   ngOnInit() {
      this.authService.logout();
      this.router.navigate(['/']);
   }

}