import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { ViajeDetailComponent } from './pages/viaje-detail/viaje-detail.component';

const routes: Routes = [
  { path: 'viajeDetail/:viajeID', component: ViajeDetailComponent },
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
  //{ path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
