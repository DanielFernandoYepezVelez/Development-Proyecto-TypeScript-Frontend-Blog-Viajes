import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, /* tap */ } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

/* Interfaces */
import {Viajes, Viaje, ViajeId} from '../interfaces/response-viajes';

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

  /**
   * Get --> Para Obtener Un Viaje Por Id
   * <Viajes> --> Respuesta Del Servidor
   * <viaje[]> --> Lo Que Retorna El Observable, Un Arreglo De 1 Viaje Por ID
   */
  public viaje(idViaje: string | null): Observable<Viaje[]> {
    return this.http.get<ViajeId>(`${this.url}/viajes/${idViaje}`)
                    .pipe(
                      /* tap((viaje) => console.log(viaje)), */
                      map((resp) => resp.viaje)
                    );
  }
}
