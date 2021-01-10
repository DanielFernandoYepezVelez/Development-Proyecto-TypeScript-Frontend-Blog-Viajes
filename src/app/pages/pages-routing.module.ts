import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { ViajesComponent } from '../components/viajes/viajes.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { ViajeDetailComponent } from './viaje-detail/viaje-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NosotrosComponent } from '../components/nosotros/nosotros.component';
import { TestimonialesComponent } from '../components/testimoniales/testimoniales.component';

const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent,
  children: [
      { path: '', component: InicioComponent },
      { path: 'viajes', component: ViajesComponent },
      { path: 'nosotros', component: NosotrosComponent },
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
