import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import {MultiDataSet, Label, Colors} from 'ng2-charts';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

    public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: MultiDataSet = [
        [350, 450, 100],
        [88, 200, 120],
    ];
    public doughnutChartType: ChartType = 'doughnut';
    doughnutChartColor: Colors[] = [
        {
            backgroundColor: [
              'rgba(67, 59, 226, .4)', 'rgba(58, 176, 26, .3)', 'rgba(57, 234, 226, .3)'
            ],
            hoverBackgroundColor: ['rgba(67, 59, 226, .6)', 'rgba(58, 176, 26, .6)', 'rgba(57, 234, 226, .6)', 'rgba(57, 234, 226, .6)'],
            borderWidth: 0,
        }
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
