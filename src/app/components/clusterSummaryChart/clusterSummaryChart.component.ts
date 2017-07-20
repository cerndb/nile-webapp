import {Component, Input} from '@angular/core';

import {DashboardService} from '../../pages/dashboard/dashboard.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'cluster-summary-chart',
  templateUrl: './clusterSummaryChart.html',
  styleUrls: ['./clusterSummaryChart.scss']
})

// TODO: move chart.js to it's own component
export class clusterSummaryChart {

  @Input() public data: Array<Object>;
  @Input() public pos: number;
  @Input() public legend: boolean;

  constructor() {

  }

  ngAfterViewInit() {
      this._loadDoughnutCharts();
  }

    private _loadDoughnutCharts() {
      let el = jQuery('.chart-area').get(this.pos) as HTMLCanvasElement;
      new Chart(el.getContext('2d')).Doughnut(this.data, {
        segmentShowStroke: false,
        percentageInnerCutout : 64,
        responsive: true
      });
    }

}