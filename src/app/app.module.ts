import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { ChartsComponent } from './components/charts/charts.component';


// Modules
import {HomeModule} from './components/home/home.module';
import {ModalsModule} from './modals/modals.module';
import { ChartsModule } from 'ng2-charts';
import { BarHorizontalComponent } from './components/charts/bar-horizontal/bar-horizontal.component';
import { BarVerticalComponent } from './components/charts/bar-vertical/bar-vertical.component';
import { CircleChartComponent } from './components/charts/circle-chart/circle-chart.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CalendarDatapickerComponent } from './components/calendar-datapicker/calendar-datapicker.component';
// import { ChartDataLabels }  from 'chartjs-plugin-datalabels';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    ChartsComponent,
    BarHorizontalComponent,
    BarVerticalComponent,
    CircleChartComponent,
    DoughnutChartComponent,
    CarouselComponent,
    CalendarDatapickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ModalsModule,
    CarouselModule,
    BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
