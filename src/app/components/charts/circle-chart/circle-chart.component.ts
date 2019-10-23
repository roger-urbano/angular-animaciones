import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import { Chart } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent implements OnInit, AfterViewInit {

   @ViewChild('doughnutCharts', {static: false} ) doughnutChart: ElementRef;

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [20, 80],
  ];
  public doughnutChartType: ChartType = 'doughnut';

   // Iniciar array para colors
   doughnutChartColor: Colors[] = [
      {
         backgroundColor: [],
         borderWidth: 0,
      }
   ];

   public doughnutChartOptions = {
      responsive: true,
      tooltips: {
         enabled: false,
      },
      cutoutPercentage: 85,
      plugins: {
         datalabels: false,
      },
      title: {
         display: false,
         position: "top",
         text: "Doughnut Chart",
         fontSize: 18,
         fontColor: "#111"
      },
      legend: {
         display: false,
         position: "bottom",
         labels: {
            fontColor: "#005792",
            fontSize: 11
         }
      },
   };


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

   // ngAfterViewInit(){
   //
   // }

   ngAfterViewInit() {

     // Degradado para el gráfico chart
      const ctx = this.doughnutChart.nativeElement.getContext('2d');
      const blueGradient = ctx.createLinearGradient(0, 0, 0, 300);
      blueGradient.addColorStop(1, 'rgba(11,138,229,0.15)');
      blueGradient.addColorStop(0, 'rgba(11,138,229,1)');
      console.log(blueGradient);

      this.doughnutChartColor = [
         {
            backgroundColor: ['rgb(248, 248, 248)', blueGradient],
            borderWidth: 0,
         }
      ];
      // this.doughnutChartColor[0].backgroundColor = [blueGradient, 'rgb(255, 64, 129)'];
   }
}
