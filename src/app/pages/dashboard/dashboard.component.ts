import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

   // Doughnut
  // doughnutChartLabels: string[] = [ 'Target Amount', 'Loan Disbursed'];
  // doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
  //   { 
  //     data: [ 500000000, 105000000 ],
  //     label: 'Target Position',
  //     backgroundColor: [
  //       'rgba(245, 107, 42, 1)',
  //       'rgba(254, 233, 233, 1)',
  //     ],
  //     hoverBackgroundColor: [
  //       'rgba(245, 107, 42, 1)',
  //       'rgba(254, 233, 233, 1)',
  //     ],
  //     hoverBorderColor: 'transparent',
  //     hoverOffset: 4,
  //   },
  // ];
  // doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
  //   responsive: false,
  //   plugins: {
  //     legend: {
  //       position: 'bottom',
  //       title: {
  //         position: 'start'
  //       }
  //     }
  //   }
  // };

  constructor() { }

  ngOnInit(): void {
  }

}
