import {Component, OnInit, ViewChild} from '@angular/core';
import { ClusterEntity } from '../../../api/model/clusterEntity';
import { ClusterTableService } from '../cluster-table/cluster-table.service';
import { ClusterWizardComponent } from '../cluster-wizard/cluster-wizard.component';


@Component({
  selector: 'nile-cluster-table-prime',
  templateUrl: './cluster-table-prime.component.html',
  styleUrls: ['./cluster-table-prime.component.scss']
})
export class ClusterTablePrimeComponent implements OnInit {

  @ViewChild(ClusterWizardComponent)
  public readonly dialog: ClusterWizardComponent;

  clusterList: ClusterEntity[];

  cols: any[] = [
    {field: 'name', header: 'Name'},
    {field: 'type', header: 'Type'},
    // {field: 'size', header: 'Size'},
    {field: 'master_cluster_id', header: 'Master/Slave'},
    {field: 'description', header: 'Description'},
    {field: 'class', header: 'Category'},
    {field: 'attributes.port_ssl', header: 'Port'},
    {field: 'username', header: 'Superuser'},
    {field: 'version', header: 'Version'},
    {field: 'state', header: 'State'}
  ];

  numberCluster:number;

  constructor(protected service: ClusterTableService) {
  }

  ngOnInit(){
    this.service.getClusterList()
      .subscribe(
        (data) => {
          this.clusterList = data;
          var str = JSON.stringify(this.clusterList);
          this.numberCluster = this.clusterList.length;
          console.log(this.clusterList);
        },
        (err) => console.log(err)
      );
  }


  onEdit(clusterEntity:ClusterEntity): void {
    console.log(clusterEntity);
    this.dialog.fillData(clusterEntity);
  }
}
