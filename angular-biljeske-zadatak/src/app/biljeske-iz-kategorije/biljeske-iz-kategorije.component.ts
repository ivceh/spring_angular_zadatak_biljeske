import {Component, OnInit} from '@angular/core';
import {Kategorija} from "../kategorija";
import {Biljeska} from "../biljeska";
import {BiljeskaService} from "../biljeska.service";
import {KategorijaService} from "../kategorija.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-biljeske-iz-kategorije',
  templateUrl: './biljeske-iz-kategorije.component.html',
  styleUrl: './biljeske-iz-kategorije.component.css'
})
export class BiljeskeIzKategorijeComponent implements OnInit{
  kategorija: Kategorija = new Kategorija();
  id: number = -4;
  biljeske: Biljeska[] = [];
  constructor(private biljeskaService: BiljeskaService,
              private kategorijaService: KategorijaService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getKategorijaById(this.id);
    this.getBiljeskeByIdKategorije(this.id);
  }

  private getKategorijaById(id: number) {
    this.kategorijaService.getKategorija(id).subscribe(data => {
      console.log(data);
      this.kategorija = data;
    }, error => console.log(error));
  }

  private getBiljeskeByIdKategorije(idkategorije: number) {
    this.biljeskaService.getBiljeskeByIdKategorije(idkategorije).subscribe(data => {
      this.biljeske = data;
    });
  }

  updateBiljeska(id: number){
    this.router.navigate(['uredi-biljesku', id]);
  }

  deleteBiljeska(id: number){
    this.biljeskaService.deleteBiljeska(id).subscribe(data => {
      console.log(data)
      this.getBiljeskeByIdKategorije(this.id);
    });
  }
}
