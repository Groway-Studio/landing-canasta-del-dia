import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full',redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
