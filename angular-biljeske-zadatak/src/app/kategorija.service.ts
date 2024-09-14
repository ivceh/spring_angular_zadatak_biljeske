import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Kategorija } from "./kategorija";

@Injectable({
  providedIn: 'root'
})
export class KategorijaService {

  private baseURL = "http://localhost:8080/api/v1";
  private endpointKategorije = "/kategorije";
  private endpointKategorija = "/kategorija";

  constructor(private httpClient: HttpClient) { }

  getKategorijelist(): Observable<Kategorija[]>{
    return this.httpClient.get<Kategorija[]>(`${this.baseURL}${this.endpointKategorije}`);
  }

  createKategorija(kategorija: Kategorija): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}${this.endpointKategorija}`, kategorija)
  }

  getKategorija(id: number): Observable<any> {
    return this.httpClient.get<Kategorija>(`${this.baseURL}${this.endpointKategorija}/${id}`);
  }
}
