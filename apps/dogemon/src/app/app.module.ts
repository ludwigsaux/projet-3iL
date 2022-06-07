import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DogesComponent } from './doges/doges.component';
import { DogeDetailComponent } from './doge-detail/doge-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { GameComponent } from './game/game.component';
import { GamebotComponent } from './gamebot/gamebot.component';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    MainMenuComponent,
    DogesComponent,
    DogeDetailComponent,
    InscriptionComponent,
    GamebotComponent,
    GameComponent
  ],
  
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
