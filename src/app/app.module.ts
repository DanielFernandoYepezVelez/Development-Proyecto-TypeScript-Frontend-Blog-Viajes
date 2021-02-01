import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Renderizacion Other Modules Final */
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

/* Components Propios */
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, Page404Component],
  imports: [BrowserModule, PagesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
