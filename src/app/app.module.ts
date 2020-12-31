import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Renderizacion Other Modules Final */
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

/* Components Propios */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
