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
import { RrssComponent } from './components/shared/rrss/rrss.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { ShareCalendarComponent } from './components/shared/share-calendar/share-calendar.component';


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
    PatrocinioComponent,
    RrssComponent,
    ShareCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatDialogModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
