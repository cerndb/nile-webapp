import {AfterViewInit, Component, OnInit} from '@angular/core';

import {DashboardService} from '../../pages/dashboard/dashboard.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';

@Component({
  selector: 'resource-summary-chart',
  templateUrl: './resourceSummaryChart.component.html',
  styleUrls: ['./resourceSummaryChart.component.scss']
})

// TODO: move easypiechart to component
export class resourceSummaryChart implements OnInit, AfterViewInit{

  public charts: Array<Object>;
  private _init = false;

  constructor(private _dashboardService: DashboardService) {
  }

  ngOnInit() {` `
    this.charts = this._dashboardService.getResourcesData();
  }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0.1)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  //TODO: Change the random percentage
  private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }
}
