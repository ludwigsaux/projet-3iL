import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DogesComponent } from './doges/doges.component';
import { GamebotComponent } from './gamebot/gamebot.component';


const routes: Routes = [
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'doges', component: DogesComponent},
  {path: 'gamebot', component: GamebotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
