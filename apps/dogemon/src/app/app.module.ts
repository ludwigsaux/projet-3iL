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
import { GameComponent } from './game/game.component';
import { GamebotComponent } from './gamebot/gamebot.component';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { CombatComponent } from './combat/combat.component';
import { AproposComponent } from './apropos/apropos.component';
import { GameBotService } from './gamebot.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    MainMenuComponent,
    DogesComponent,
    DogeDetailComponent,
    GamebotComponent,
    GameComponent,
    IndexComponent,
    CombatComponent,
    AproposComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [GameBotService],
  bootstrap: [AppComponent],
})
export class AppModule {}
