import { Component, Input} from '@angular/core';

import 'style-loader!./pie-chart.component.scss';

@Component({
  selector: 'nile-pie-chart',
  templateUrl: './pie-chart.component.html'
})

export class PieChartComponent  {

  @Input() single: any[];

  view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#40daf1',  '#1b70ef', '#3c4eb9']
  };
  // domain: [
  //   '#bf9d76', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1', '#afafaf', '#707160', '#ba9383', '#d9d5c3'
  //   ]
  // domain: [
  //   '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
  //   ]

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
  }


  onSelect(event) {
    console.log(event);
  }

}
