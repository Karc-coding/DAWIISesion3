import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno.model';

const baseUrl = 'http://localhost:8090/rest/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }
}
