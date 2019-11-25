import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from './components/users/users.component';
import {ChartsComponent} from './components/charts/charts.component';
import { CarouselComponent } from './components/carousel/carousel.component';



const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'usuarios', component: UsersComponent },
   { path: 'charts', component: ChartsComponent },
   { path: 'carrusel-owl', component: CarouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
