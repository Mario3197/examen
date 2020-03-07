import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examen } from '../modelos/Examen';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosExamenService {

  constructor(private http: HttpClient) { }

  getDatos (): Observable<Examen[]> {
    return this.http.get<Examen[]>(environment.services + 'v1/examen2');
  }
}
