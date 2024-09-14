import {Component, OnInit} from '@angular/core';
import {Biljeska} from "../biljeska";
import {BiljeskaService} from "../biljeska.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Kategorija} from "../kategorija";
import {KategorijaService} from "../kategorija.service";

@Component({
  selector: 'app-uredi-biljesku',
  templateUrl: './uredi-biljesku.component.html',
  styleUrl: './uredi-biljesku.component.css'
})
export class UrediBiljeskuComponent implements OnInit {
  biljeska: Biljeska = new Biljeska();
  id: number = -3;
  kategorije: Kategorija[] = [];
  constructor(private biljeskaService: BiljeskaService,
              private kategorijaService: KategorijaService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getKategorije();
    this.getBiljeskaById(this.id);
  }

  onSubmit(){
    this.updateBiljeska();
  }

  private getBiljeskaById(id: number): void{
    this.biljeskaService.getBiljeska(id).subscribe(data => {
      console.log(data);
      this.biljeska = data;
    }, error => console.log(error));
  }

  private getKategorije(): void{
    this.kategorijaService.getKategorijelist().subscribe(data => {
      this.kategorije = data;
    });
  }

  updateBiljeska() {
    this.biljeskaService.updateBiljeska(this.biljeska.id, this.biljeska)
      .subscribe(data => {
        console.log(data);
        this.goToPopisBiljeski();
      }, error => console.log(error));
  }

  goToPopisBiljeski(){
    this.router.navigate(['/biljeske']);
  }
}
