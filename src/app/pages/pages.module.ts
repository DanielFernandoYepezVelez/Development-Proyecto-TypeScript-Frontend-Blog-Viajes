import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
