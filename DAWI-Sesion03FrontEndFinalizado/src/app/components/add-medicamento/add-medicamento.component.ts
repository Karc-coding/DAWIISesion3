import { Component, OnInit } from '@angular/core';

import { Medicamento } from 'src/app/models/medicamento.model';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {

  constructor(private medicamentoService: MedicamentoService) { }

  medicamento: Medicamento = {
    idMedicamento: 0,
    nombre: '',
    precio: 0.0,
    stock: 0,
    laboratorio: ''
  };

  ngOnInit(): void {
  }
  
  saveMedicamento(){
    console.log(">>> saveMedicamento() ");

    const data = {
      nombre: this.medicamento.nombre,
      precio: this.medicamento.precio,
      stock: this.medicamento.stock,
      laboratorio: this.medicamento.laboratorio
    };

    console.log(">>>Save Inicio Impresion");
    console.log(data);
    console.log(">>>Save Fin Impresion");

      this.medicamentoService.create(data)
        .subscribe(
          response => {
            console.log(response.mensaje);
            alert(response.mensaje)
          },
          error => {
            console.log(error);
          }
        );

  }

}
