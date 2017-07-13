import {AfterViewInit, Component, OnInit} from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'nile-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  kafka: any [];
  zookeeper: any [];
  vcpu: any[];
  numberNodes: any[];
  numberVolumes: any[];
  storageUsage: any[];

  constructor(private _service: DashboardService) {
  }

  ngOnInit()
  {
    this._service.getKafkaData().then(data => this.kafka = data);
    this._service.getZookeeperData().then(data => this.zookeeper = data);
    this._service.getVCPUData().then(data => this.vcpu = data);
    this._service.getNumberNodes().then(data => this.numberNodes = data);
    this._service.getNumberVolumes().then(data => this.numberVolumes = data);
    this._service.getStorageUsage().then(data => this.storageUsage = data);
  }

  ngAfterViewInit(): void {

    let el = jQuery('.nile-pie-chart').get(0) as HTMLElement;
 //   console.log(el);
  }

}
