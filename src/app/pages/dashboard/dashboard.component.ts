import {AfterViewInit, Component} from '@angular/core';

import 'style-loader!./dashboard.component.scss';
import {DashboardService} from './dashboard.service';

@Component({
  selector: 'nile-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements  AfterViewInit {

  kafka: any [];
  zookeeper: any [];

  constructor(private _service: DashboardService) {
    this.kafka = this._service.getKafkaData();
    this.zookeeper = this._service.getZookeeperData();
    console.log('get data from service');
    console.log(this.kafka);
  }


  ngAfterViewInit(): void {

    let el = jQuery('.nile-pie-chart').get(0) as HTMLElement;
    console.log(el);
  }

}
