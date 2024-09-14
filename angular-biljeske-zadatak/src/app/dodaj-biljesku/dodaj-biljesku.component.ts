import {Component, OnInit} from '@angular/core';
import {Biljeska} from "../biljeska";
import {BiljeskaService} from "../biljeska.service";
import {Router} from "@angular/router";
import {Kategorija} from "../kategorija";
import {KategorijaService} from "../kategorija.service";

@Component({
  selector: 'app-dodaj-biljesku',
  templateUrl: './dodaj-biljesku.component.html',
  styleUrl: './dodaj-biljesku.component.css'
})
export class DodajBiljeskuComponent implements OnInit {
  biljeska: Biljeska = new Biljeska();
  kategorije: Kategorija[] = [];
  constructor(private biljeskaService: BiljeskaService,
              private kategorijaService: KategorijaService,
              private router: Router) {}

  ngOnInit() {
    this.getKategorije();
  }

  private getKategorije(): void{
    this.kategorijaService.getKategorijelist().subscribe(data => {
      this.kategorije = data;
    });
  }

  saveBiljeska(){
    this.biljeskaService.createBiljeska(this.biljeska).subscribe( data =>{
        console.log(data);
        this.goToPopisBiljeski();
      },
      error => console.log(error));
  }

  goToPopisBiljeski(){
    this.router.navigate(['/biljeske']);
  }

  onSubmit(){
    console.log(this.biljeska);
    this.saveBiljeska();
  }
}
