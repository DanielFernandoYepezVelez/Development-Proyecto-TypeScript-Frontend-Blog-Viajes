import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Services */
import { ViajesService } from '../../services/viajes.service';

/* Interfaces */
import { Viaje } from '../../interfaces/response-viajes';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css', '../inicio/inicio.component.css']
})
export class ViajeComponent implements OnInit {
  public viajeDetail: Viaje[] = [];
  private viajeID: string | null;

  constructor(private viajeService: ViajesService, private activatedRoute: ActivatedRoute) { 
    this.viajeID = this.activatedRoute.snapshot.paramMap.get('viajeID');
  }

  ngOnInit(): void {
    this.viajeService.viaje(this.viajeID).subscribe((viaje) => {
      // console.log(viaje);
      this.viajeDetail = viaje;
    });
  }
}
