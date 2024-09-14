import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopisKategorijaComponent } from './popis-kategorija/popis-kategorija.component';
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import { DodajKategorijuComponent } from './dodaj-kategoriju/dodaj-kategoriju.component';
import { FormsModule } from "@angular/forms";
import { DodajBiljeskuComponent } from './dodaj-biljesku/dodaj-biljesku.component';
import { PopisBiljeskiComponent } from './popis-biljeski/popis-biljeski.component';
import { UrediBiljeskuComponent } from './uredi-biljesku/uredi-biljesku.component';
import { BiljeskeIzKategorijeComponent } from './biljeske-iz-kategorije/biljeske-iz-kategorije.component';

@NgModule({
  declarations: [
    AppComponent,
    PopisKategorijaComponent,
    DodajKategorijuComponent,
    DodajBiljeskuComponent,
    PopisBiljeskiComponent,
    UrediBiljeskuComponent,
    BiljeskeIzKategorijeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
