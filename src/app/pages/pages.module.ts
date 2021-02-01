import { NgModule } from '@angular/core';

/* Other Modules */
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

/* Module Routes Child */
import { PagesRoutingModule } from './pages-routing.module';

/* Components Propios */
import { AgenciaComponent } from './agencia/agencia.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent, AgenciaComponent],
  imports: [SharedModule, ComponentsModule, PagesRoutingModule],
  exports: [LandingPageComponent, AgenciaComponent, PagesRoutingModule]
})
export class PagesModule { }
