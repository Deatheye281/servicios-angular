import { Component, OnInit } from '@angular/core';
import { Hospital } from '../interfaces/hospital';
import { HospitalesService } from '../services/hospitales.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  hospital: Hospital = {
    nombre: null,
    direccion: null,
    telefono: null,
    camas: null,
  };

  constructor(private hospitalesService: HospitalesService) { }

  ngOnInit(): void {
  }

  guardarHospital(){
    console.log(this.hospital);
    this.hospitalesService.guardarHospital(this.hospital).subscribe((data) => {
      alert('Hopsital Guardado');
      console.log(data);
    }, (error) => {
      alert("Ha ocurrido un error");
      console.log(error);
    });

  }

}
