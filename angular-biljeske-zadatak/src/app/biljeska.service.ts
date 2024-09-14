import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Biljeska } from "./biljeska";

@Injectable({
  providedIn: 'root'
})
export class BiljeskaService {

  private baseURL = "http://localhost:8080/api/v1";
  private endpointBiljeske = "/biljeske";
  private endpointBiljeska = "/biljeska";

  constructor(private httpClient: HttpClient) { }

  getBiljeskelist(): Observable<Biljeska[]>{
    return this.httpClient.get<Biljeska[]>(`${this.baseURL}${this.endpointBiljeske}`);
  }

  createBiljeska(biljeska: Biljeska): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}${this.endpointBiljeska}`, biljeska)
  }

  getBiljeska(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}${this.endpointBiljeska}/${id}`);
  }

  updateBiljeska(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}${this.endpointBiljeska}/${id}`, value);
  }

  deleteBiljeska(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${this.endpointBiljeska}/${id}`)
  }
}
