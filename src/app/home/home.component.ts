import { Component, OnInit } from '@angular/core';
import { HospitalesService } from '../services/hospitales.service';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../interfaces/hospital';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = 'http://localhost/Hospital/public/api/';
  hospitales: Hospital[];

  constructor(private hospitalesService: HospitalesService, private httpClient: HttpClient) { 
    httpClient.get(this.API_ENDPOINT + 'hospitales').subscribe((data: Hospital[]) => {
      this.hospitales = data;
    });
  }

  ngOnInit(): void {
  }

}
