import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatotekaService {

  private baseUrl = 'http://localhost:8080/api/v1/dat';

  constructor(private http: HttpClient) { }

  upload(datoteka: File, biljeskaid: Number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('biljeskaid', biljeskaid.toString());
    formData.append('datoteka', datoteka);

    return this.http.post(`${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }
}
