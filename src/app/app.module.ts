import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { ListOfFilmsComponent } from './list-of-films/list-of-films.component';
import { ListOfFavoritesComponent } from './list-of-favorites/list-of-favorites.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    MainAppComponent,
    FooterAppComponent,
    ListOfFilmsComponent,
    ListOfFavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
