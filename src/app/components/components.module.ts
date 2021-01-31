import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* Este Es Para Formularios Por Template, No Es Necesario Si Utilizamos Aproximación ReactiveForms */
// import { FormsModule } from '@angular/forms';

/* Components */
import { InicioComponent } from './inicio/inicio.component';
import { ViajeComponent } from './viaje/viaje.component';
import { ViajesComponent } from './viajes/viajes.component';
import { TestimonialesComponent } from './testimoniales/testimoniales.component';

@NgModule({
  declarations: [InicioComponent, ViajeComponent, ViajesComponent, TestimonialesComponent],
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HttpClientModule],
  exports: [InicioComponent, ViajeComponent, ViajesComponent]
})
export class ComponentsModule { }
