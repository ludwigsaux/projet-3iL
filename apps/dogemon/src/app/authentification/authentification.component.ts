import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

   formData!: FormGroup;
   loading = false;
   submitted = false;
   returnUrl!: string;
 
  constructor(private authService : AuthService,
              private route: ActivatedRoute, 
              private router : Router,
              private formBuilder: FormBuilder) { 

                if (this.authService.isUserLoggedIn) {
                  this.router.navigate(['/']);
                }

              }

  ngOnInit(){
      this.formData = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

   }

  // convenience getter for easy access to form fields
  get f() { return this.formData.controls; }

  onSubmit() {
    
    this.submitted = true;

    // stop here if form is invalid
    if (this.formData.invalid) {
      return;
    }

    this.loading = true;

    this.authService.login(this.f.userName.value, this.f.password.value)
    .subscribe(
        data => {
            this.router.navigate(['/main-menu']);
        },
        error => {
            this.loading = false;
        });
 }

}