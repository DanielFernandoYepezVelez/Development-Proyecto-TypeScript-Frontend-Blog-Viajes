import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AgenciaComponent } from './agencia/agencia.component';
import { ViajeComponent } from '../components/viaje/viaje.component';
import { ViajesComponent } from '../components/viajes/viajes.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NosotrosComponent } from '../components/nosotros/nosotros.component';
import { TestimonialesComponent } from '../components/testimoniales/testimoniales.component';

const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'agencia', component: AgenciaComponent,
    children: [
      { path: 'viajes', component: ViajesComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'viajeDetail/:viajeID', component: ViajeComponent },
      { path: 'testimoniales', component: TestimonialesComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
