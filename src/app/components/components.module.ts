import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { InicioComponent } from './inicio/inicio.component';
// import { ViajesComponent } from './viajes/viajes.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [InicioComponent]
})
export class ComponentsModule { }
