import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Components */
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, BannerComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, BannerComponent, FooterComponent]
})
export class SharedModule { }
