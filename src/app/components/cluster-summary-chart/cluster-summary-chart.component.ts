import {Component, Input} from '@angular/core';

import * as Chart from 'chart.js';

@Component({
  selector: 'cluster-summary-chart',
  templateUrl: './cluster-summary-chart.component.html',
  styleUrls: ['./cluster-summary-chart.component.scss']
})

// TODO: move chart.js to it's own component
export class ClusterSummaryChartComponent {

  @Input() public data: Array<Object>;
  @Input() public pos: number;
  @Input() public legend: boolean;
  @Input() public numberBrokers: number;

  constructor() {

  }

  ngAfterViewInit() {
      this._loadDoughnutCharts();
  }

  //TODO: move this to dashboard component
  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(this.pos) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.data, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }

}
