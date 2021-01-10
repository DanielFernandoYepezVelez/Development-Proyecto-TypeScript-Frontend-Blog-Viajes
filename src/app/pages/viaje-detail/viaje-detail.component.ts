import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Services */
import { ViajesService } from '../../services/viajes.service';

/* Interfaces */
import { Viaje } from '../../interfaces/response-viajes';

@Component({
  selector: 'app-viaje-detail',
  templateUrl: './viaje-detail.component.html',
  styleUrls: ['./viaje-detail.component.css']
})
export class ViajeDetailComponent implements OnInit {
  private viajeID: string | null;
  public viajeAll: Viaje[] = [];

  constructor(private viajesService: ViajesService, private activatedRoute: ActivatedRoute) {
    this.viajeID = this.activatedRoute.snapshot.paramMap.get('viajeID');
  }

  ngOnInit(): void {
    this.viajesService.viaje(this.viajeID).subscribe(viaje => {
      console.log(viaje);
    });
  }

}
