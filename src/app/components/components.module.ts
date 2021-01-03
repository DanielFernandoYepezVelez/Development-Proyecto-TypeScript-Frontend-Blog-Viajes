import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { InicioComponent } from './inicio/inicio.component';
// import { ViajesComponent } from './viajes/viajes.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [InicioComponent]
})
export class ComponentsModule { }
