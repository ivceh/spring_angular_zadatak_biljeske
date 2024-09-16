import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Biljeska} from "./biljeska";
import {Datoteka} from "./datoteka";

@Injectable({
  providedIn: 'root'
})
export class DatotekaService {

  private baseURL = 'http://localhost:8080/api/v1/dat';
  private endpointDatoteke = "/datoteke";
  private endpointDatoteka = "/datoteka";
  private endpointDatotekeByIdBiljeske = "/datoteke_by_id_biljeske";

  constructor(private httpClient: HttpClient) { }

  upload(datoteka: File, biljeskaid: Number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('biljeskaid', biljeskaid.toString());
    formData.append('datoteka', datoteka);

    return this.httpClient.post(`${this.baseURL}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  getDatotekeByIdBiljeske(id_biljeske: number): Observable<Datoteka[]> {
    return this.httpClient.get<Datoteka[]>(`${this.baseURL}${this.endpointDatotekeByIdBiljeske}/${id_biljeske}`);
  }

  deleteDatoteka(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${this.endpointDatoteka}/${id}`);
  }
}
