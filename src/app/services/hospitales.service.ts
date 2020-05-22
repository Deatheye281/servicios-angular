import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hospital } from '../interfaces/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {
  
  API_ENDPOINT = 'http://localhost/Hospital/public/api/';

  constructor(private httpClient: HttpClient) { }

  guardarHospital(hospital: Hospital){
    const HEADERS = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'guardarHospital', hospital, {headers: HEADERS});
        
  }
}
