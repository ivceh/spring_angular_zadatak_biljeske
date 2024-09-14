import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PopisKategorijaComponent} from "./popis-kategorija/popis-kategorija.component";
import {DodajKategorijuComponent} from "./dodaj-kategoriju/dodaj-kategoriju.component";
import {PopisBiljeskiComponent} from "./popis-biljeski/popis-biljeski.component";
import {DodajBiljeskuComponent} from "./dodaj-biljesku/dodaj-biljesku.component";
import {UrediBiljeskuComponent} from "./uredi-biljesku/uredi-biljesku.component";

const routes: Routes = [
  {path: 'kategorije', component: PopisKategorijaComponent},
  {path: 'dodaj-kategoriju', component: DodajKategorijuComponent},
  {path: 'biljeske', component: PopisBiljeskiComponent},
  {path: 'dodaj-biljesku', component: DodajBiljeskuComponent},
  {path: 'uredi-biljesku/:id', component: UrediBiljeskuComponent},
  {path: '', redirectTo:'kategorije', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
