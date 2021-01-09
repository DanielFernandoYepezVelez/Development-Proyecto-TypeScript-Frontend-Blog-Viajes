import { Observable } from 'rxjs';
import { map, /* tap */ } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Interfaces */
import {Viajes, Viaje} from '../interfaces/response-viajes';

/* Variables De Entorno */
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /**
   * Get --> Para Obtener Los Viajes
   * <Viajes> --> Respuesta Del Servidor
   * <Viaje[]> --> Lo Que Retorna El Observable, Un Arreglo De 'N' Viajes
   */
  public viajes(): Observable<Viaje[]> {
    return this.http.get<Viajes>(`${this.url}/inicio`)
                    .pipe(
                      /* tap((resServer) => console.log(resServer)), */
                      map((resp) => resp.viajes)
                    );
  }
}
