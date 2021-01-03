import { Component, OnInit } from '@angular/core';

/* Services */
import { ViajesService } from '../../services/viajes.service';

/* Interfaces */
import { Viaje } from '../../interfaces/response-viajes';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public viajesAll: Viaje[] = [];

  constructor(private viajesService: ViajesService) { }

  ngOnInit(): void {
    this.viajesService.viajes().subscribe((viajes) => {
      if (!viajes) {
        // this.router.navigateByUrl('/');
        return;
      }

      this.viajesAll = viajes;
    });
  }

}
