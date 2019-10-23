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
        [88, 200],
    ];
    public doughnutChartType: ChartType = 'doughnut';
    doughnutChartColor: Colors[] = [
        {
            backgroundColor: [
              'rgba(103, 218, 114, .4)', 'rgba(98, 42, 201, .4)', 'rgba(233, 236, 240, .4)'
            ],
            hoverBackgroundColor: ['rgba(103, 218, 114, .6)', 'rgba(98, 42, 201, .6)', 'rgba(233, 236, 240, .6)'],
            borderWidth: 0,
        },
        {
            backgroundColor: [
                'rgba(229, 135, 40, .4)', 'rgba(219, 185, 59, .4)'
            ],
            hoverBackgroundColor: ['rgba(214, 10, 40, .6)', 'rgba(232, 73, 97, .6)'],
            borderWidth: 0,
        }
    ];

    public doughnutChartOptions = {
        responsive: true,
        animation: {
            easing: 'easeInOutQuad',
            duration: 2000
        },
        tooltips: {
            enabled: true,
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

}
