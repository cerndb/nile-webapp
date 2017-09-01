import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'itdb-dashboard',
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
