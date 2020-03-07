import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examen } from '../modelos/Examen';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosExamenService {

  constructor(private http: HttpClient) { }

  getDatos (): Observable<Examen[]> {
    return this.http.get<Examen[]>('http://localhost:8090/mark43-service/v1/examen2');
  }
}
