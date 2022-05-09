import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DogesComponent } from './doges/doges.component';


const routes: Routes = [
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'doges', component: DogesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
