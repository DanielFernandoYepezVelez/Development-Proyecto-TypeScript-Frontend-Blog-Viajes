import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Renderizacion Other Modules Final */
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

/* Components Propios */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
