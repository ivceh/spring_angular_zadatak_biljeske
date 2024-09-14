import {Component, OnInit} from '@angular/core';
import {Kategorija} from "../kategorija";
import {Observable} from "rxjs";
import {KategorijaService} from "../kategorija.service";

@Component({
  selector: 'app-popis-kategorija',
  templateUrl: './popis-kategorija.component.html',
  styleUrl: './popis-kategorija.component.css'
})
export class PopisKategorijaComponent implements OnInit{
  kategorije: Kategorija[] = []; /*{
    "id": 1,
    "ime": "voce"
  },
    {
      "id": 2,
      "ime": "povrce"
    }]*/

  constructor(private kategorijaService: KategorijaService) {
  }

  ngOnInit() {
    this.getKategorije();
  }

  private getKategorije(): void{
    this.kategorijaService.getKategorijelist().subscribe(data => {
      this.kategorije = data;
    });
  }
}
