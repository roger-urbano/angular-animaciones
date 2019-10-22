import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'bar-horizontal',
  templateUrl: './bar-horizontal.component.html',
  styleUrls: ['./bar-horizontal.component.scss']
})
export class BarHorizontalComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        },
        display: false
      }],
      yAxes: [{
        maxBarThickness: 30,
        minBarLength: 30,
        stacked: true,
        id: 'y-axis-1',
        display: true,
        gridLines: {
          display: false,
        },
        ticks: {
          padding: 20,
          fontSize: 11,
          fontColor: '#005792',
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'start',
        align: 'right',
        backgroundColor: 'transparent',
        clamp: true,
        color: '#fff',
        font: {
          weight: 'bold',
          size: 10
        },
        formatter: (value, context) => {
          return value + '%';
        }
      }
    }
  };
  public barChartLabels: Label[] = ['Ninet', 'About', 'Lorem', 'Ipsum', 'Rayo', 'dropd', 'Prec'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  barChartColor: Colors[] = [
    { backgroundColor: '#FF9029'},
    { backgroundColor: '#F8F8F8'}
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
