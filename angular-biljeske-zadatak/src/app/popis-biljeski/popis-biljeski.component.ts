import {Component, OnInit} from '@angular/core';
import {Biljeska} from "../biljeska";
import {concat, Observable} from "rxjs";
import {BiljeskaService} from "../biljeska.service";
import {Kategorija} from "../kategorija";
import {KategorijaService} from "../kategorija.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popis-biljeski',
  templateUrl: './popis-biljeski.component.html',
  styleUrl: './popis-biljeski.component.css'
})
export class PopisBiljeskiComponent implements OnInit{
  biljeske!: Biljeska[];
  kategorije!: Kategorija[];
  p: Number = 1;

  constructor(private biljeskaService: BiljeskaService,
              private kategorijaService: KategorijaService,
              private router: Router) {
  }

  ngOnInit() {
    this.getKategorije().subscribe(
      (data) => {
        this.kategorije = data;

        this.getBiljeske().subscribe(
          (data) => {
            this.biljeske = data;
          }
        );
      }
    );
    this.getBiljeske();
  }

  private getBiljeske(){
    return this.biljeskaService.getBiljeskelist()
  }

  private getKategorije(){
    return this.kategorijaService.getKategorijelist()
  }

  getKategorijaById(id: number): Kategorija | undefined {
    return this.kategorije.find(kategorija => kategorija.id == id);
  }

  updateBiljeska(id: number){
    this.router.navigate(['uredi-biljesku', id]);
  }

  deleteBiljeska(id: number){
    this.biljeskaService.deleteBiljeska(id).subscribe(data => {
      console.log(data)
      this.getBiljeske();
    });
  }
}
