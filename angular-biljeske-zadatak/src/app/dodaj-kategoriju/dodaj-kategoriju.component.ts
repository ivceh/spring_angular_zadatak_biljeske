import {Component, OnInit} from '@angular/core';
import {Kategorija} from "../kategorija";
import {KategorijaService} from "../kategorija.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dodaj-kategoriju',
  templateUrl: './dodaj-kategoriju.component.html',
  styleUrl: './dodaj-kategoriju.component.css'
})
export class DodajKategorijuComponent implements OnInit {
  kategorija: Kategorija = new Kategorija();
  constructor(private kategorijaService: KategorijaService, private router: Router) {}

  ngOnInit(): void {
  }

  saveKategorija(){
    this.kategorijaService.createKategorija(this.kategorija).subscribe( data =>{
      console.log(data);
      this.goToPopisKategorija();
    },
    error => console.log(error));
  }

  goToPopisKategorija(){
    this.router.navigate(['/kategorije']);
  }

  onSubmit(){
    console.log(this.kategorija);
    this.saveKategorija()
  }
}
