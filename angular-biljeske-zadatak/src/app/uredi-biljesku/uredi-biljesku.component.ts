import {Component, OnInit} from '@angular/core';
import {Biljeska} from "../biljeska";
import {BiljeskaService} from "../biljeska.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Kategorija} from "../kategorija";
import {KategorijaService} from "../kategorija.service";
import {DatotekaService} from "../datoteka.service";
import {Datoteka} from "../datoteka";

@Component({
  selector: 'app-uredi-biljesku',
  templateUrl: './uredi-biljesku.component.html',
  styleUrl: './uredi-biljesku.component.css'
})
export class UrediBiljeskuComponent implements OnInit {
  biljeska: Biljeska = new Biljeska();
  id: number = -3;
  kategorije: Kategorija[] = [];

  postojeceDatoteke: Datoteka[] = [];

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  constructor(private biljeskaService: BiljeskaService,
              private kategorijaService: KategorijaService,
              private datotekaService: DatotekaService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getKategorije();
    this.getBiljeskaById(this.id);
    this.getPostojeceDatoteke();
  }

  onSubmit(){
    this.updateBiljeska();
  }

  private getBiljeskaById(id: number): void{
    this.biljeskaService.getBiljeska(id).subscribe(data => {
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
        this.goToPopisBiljeski();
      }, error => console.log(error));
  }

  goToPopisBiljeski(){
    this.router.navigate(['/biljeske']);
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.datotekaService.upload(this.currentFile, this.biljeska.id).subscribe(
          (response) => {
            this.message = 'File uploaded successfully!';
            this.getPostojeceDatoteke();
          },
          (err) => {
            this.message = 'Could not upload the file!';
          });
      }
    }
  }

  private getPostojeceDatoteke(): void{
    this.datotekaService.getDatotekeByIdBiljeske(this.id).subscribe(data => {
      this.postojeceDatoteke = data;
    });
  }

  brisiDatoteku(id: number){
    this.datotekaService.deleteDatoteka(id).subscribe(data => {
      console.log(data)
      this.getPostojeceDatoteke();
    });
  }

  downloadFile(fileId: number, fileName: string) {
    this.datotekaService.downloadFile(fileId).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName; // Provide a filename for the download
      a.click();
      window.URL.revokeObjectURL(url); // Clean up URL
    });
  }
}
