import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { PropositoComponent } from './components/proposito/proposito.component';
import { ColaboraComponent } from './components/colabora/colabora.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { PatrocinioComponent } from './components/patrocinio/patrocinio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CalendarioComponent,
    PropositoComponent,
    ColaboraComponent,
    EquipoComponent,
    PatrocinioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
