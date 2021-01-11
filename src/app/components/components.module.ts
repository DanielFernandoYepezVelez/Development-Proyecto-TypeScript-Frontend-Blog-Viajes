import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { InicioComponent } from './inicio/inicio.component';
import { ViajeComponent } from './viaje/viaje.component';
import { ViajesComponent } from './viajes/viajes.component';

@NgModule({
  declarations: [InicioComponent, ViajeComponent, ViajesComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [InicioComponent, ViajeComponent, ViajesComponent]
})
export class ComponentsModule { }
