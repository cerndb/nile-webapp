import { Component, ViewChild } from '@angular/core';
import { ClusterTableService } from './cluster-table.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ClusterDialogComponent } from '../cluster-dialog/cluster-dialog.component';
import { ClusterEntity } from '../../../api/model/clusterEntity';


@Component({
  selector: 'nile-cluster-table',
  templateUrl: './cluster-table.component.html',
  styleUrls: ['./cluster-table.component.scss'],
})

export class ClusterTableComponent  {

  @ViewChild(ClusterDialogComponent)
  public readonly dialog: ClusterDialogComponent;

  clusterList: ClusterEntity[];

  query: string = '';

  settings = {
    actions: {
        add: false,
        edit: true,
        delete: false
    },
    pager: {
      display: true,
      perPage: 10
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      type : {
        title: 'Type',
        type: 'string'
      },
      master_cluster_id: {
        title: 'master-slave',
        type: 'number'
      },
      size: {
        title: 'Size',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      class: {
        title: 'Category',
        type: 'string'
      },
      port: {
        title: 'Port',
        type: 'number'
      },
      username: {
        title: 'Superuser',
        type: 'string'
      },
      version: {
        title: 'Version',
        type: 'number'
      },
      status: {
        title: 'Status',
        type: 'string'
      }
    },
    mode: 'external'
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ClusterTableService) {
    this.service.getClusterList()
      .subscribe(
        (data) => {
          this.clusterList = data;
          var str = JSON.stringify(this.clusterList);
          console.log(str);
          this.source.load(this.clusterList);
        },
        (err) => console.log(err)

      );
  }

  // the idea will be to have an explandable with all the instances according to the cluster Selected
  onRowSelect(event): void {
    console.log(event.data);
  }

  onEdit(event): void {
    this.dialog.fillData(event.data);
  }

}
