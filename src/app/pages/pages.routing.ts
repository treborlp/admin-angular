import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';


const routes: Routes = [
    {   
        path     : '', 
        component : PagesComponent,
        children  : 
                    [
                        { path  : "dashboard", component: DashboardComponent},
                        { path  : "progress",  component: ProgressComponent},
                        { path  : "grafica",   component: GraficaComponent},
                        { path  : '', redirectTo: '/dashboard',  pathMatch: 'full'},
                    ] 
   },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
