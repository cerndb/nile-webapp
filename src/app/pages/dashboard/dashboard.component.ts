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
    this._service.getKafkaData().then(data => this.kafka = data);
    this._service.getZookeeperData().then(data => this.zookeeper = data);
  }


  ngAfterViewInit(): void {

    let el = jQuery('.nile-pie-chart').get(0) as HTMLElement;
 //   console.log(el);
  }

}
