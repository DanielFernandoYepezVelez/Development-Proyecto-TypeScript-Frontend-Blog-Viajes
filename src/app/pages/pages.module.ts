import { NgModule } from '@angular/core';

/* Other Modules */
import { SharedModule } from '../shared/shared.module';

/* Module Routes Child */
import { PagesRoutingModule } from './pages-routing.module';

/* Components Propios */
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [SharedModule, PagesRoutingModule],
  exports: [LandingPageComponent]
})
export class PagesModule { }
