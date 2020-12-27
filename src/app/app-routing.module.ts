import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  { path: 'landingPage', component: HeaderComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  //{ path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
