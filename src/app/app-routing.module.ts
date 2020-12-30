import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
// import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  //{ path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
