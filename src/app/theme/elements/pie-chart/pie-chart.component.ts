import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';


import 'style-loader!./pie-chart.component.scss';

@Component({
  selector: 'nile-pie-chart',
  templateUrl: './pie-chart.component.html'
})

export class PieChartComponent implements OnChanges {

  @Input() data: any[];

  @Input() size: any[] = [700, 400];

  @Input() showLegend = true;

  @Input() showLabels = true;

  colorScheme = {
    domain: ['#40daf1', '#1b70ef', '#3c4eb9', '#00abff']
  };
  // domain: [
  //   '#bf9d76', '#e99450', '#d89f59', '#f2dfa7', '#a5d7c6', '#7794b1', '#afafaf', '#707160', '#ba9383', '#d9d5c3'
  //   ]
  // domain: [
  //   '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
  //   ]
  //
  // domain: [
  //   '#1D68FB', '#33C0FC', '#4AFFFE', '#AFFFFF', '#FFFC63', '#FDBD2D', '#FC8A25', '#FA4F1E', '#FA141B', '#BA38D1'
  //   ]

  explodeSlices = false;
  doughnut = false;

  constructor() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['single']) {
      console.log('New single data');
      console.log(this.size);
    }
  }

  onSelect(event) {
    console.log(event);
  }

}
