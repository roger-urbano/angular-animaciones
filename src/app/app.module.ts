import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { ChartsComponent } from './components/charts/charts.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modules
import {HomeModule} from './components/home/home.module';
import {ModalsModule} from './modals/modals.module';
import { ChartsModule } from 'ng2-charts';
import { BarHorizontalComponent } from './components/charts/bar-horizontal/bar-horizontal.component';
// import { ChartDataLabels }  from 'chartjs-plugin-datalabels';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    ChartsComponent,
    BarHorizontalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ModalsModule,
    BrowserAnimationsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
