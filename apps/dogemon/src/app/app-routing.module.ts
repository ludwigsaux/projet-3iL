import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DogesComponent } from './doges/doges.component';
import { GamebotComponent } from './gamebot/gamebot.component';
import { GameComponent } from './game/game.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'doges', component: DogesComponent},
  {path: 'game', component: GameComponent},
  {path: 'gamebot', component: GamebotComponent},
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
