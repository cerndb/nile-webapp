import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'itdb-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})

export class PieChartComponent implements OnChanges {

  @Input() data: any[];

  @Input() size: any[] = [600, 400];

  @Input() showLegend = false;

  @Input() showLabels = false;

  colorScheme = {
    domain: ['#40daf1', '#1b70ef', '#3c4eb9', '#00abff']
  };

  explodeSlices = false;
  doughnut = true;

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
