import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DogesComponent } from './doges/doges.component';
import { GamebotComponent } from './gamebot/gamebot.component';
import { GameComponent } from './game/game.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthGuard } from './auth.guard';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';

const routes: Routes = [
  {path: 'main-menu', component: MainMenuComponent, canActivate: [AuthGuard]},
  {path: 'deconnexion', component: DeconnexionComponent },
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'doges', component: DogesComponent},
  {path: 'game', component: GameComponent},
  {path: 'gamebot', component: GamebotComponent},
  // otherwise redirect to home
  // { path: '', redirectTo: 'main-menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
