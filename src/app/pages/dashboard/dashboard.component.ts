import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'nile-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public kafka: Array<Object>;
  public zookeeper: Array<Object>;
  public vcpu: Array<Object>;

  constructor(private _service: DashboardService) {

  }

  ngOnInit() {
    this.kafka = this._service.getKafkaData();
    this.zookeeper = this._service.getZookeeperData();
    this.vcpu = this._service.getVcpuData();

  }



}
