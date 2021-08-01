import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
    PagesComponent,
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
