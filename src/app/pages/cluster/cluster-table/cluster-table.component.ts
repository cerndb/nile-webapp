import { Component, ViewChild } from '@angular/core';
import { ClusterTableService } from './cluster-table.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ClusterDialogComponent } from '../cluster-dialog/cluster-dialog.component';

import 'style-loader!./cluster-table.component.scss';

@Component({
  selector: 'nile-cluster-table',
  templateUrl: './cluster-table.component.html'
})

export class ClusterTableComponent  {

  @ViewChild(ClusterDialogComponent)
  public readonly dialog: ClusterDialogComponent;

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
        title: 'Cluster Name',
        type: 'string',
      },
      userName: {
        title: 'Username',
        type: 'string'
      },
      egroup: {
        title: 'E-group',
        type: 'string'
      },
      category: {
        title: 'Category',
        type: 'string'
      },
      project: {
        title: 'Project',
        type: 'string'
      },
      description: {
        title: 'Description',
        type: 'string'
      },
      type : {
        title: 'Type',
        type: 'string'
      }
    },
    mode: 'external'
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ClusterTableService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  // the idea will be to have an explandable with all the instances according to the cluster Selected
  onRowSelect(event): void {
    console.log(event.data);
  }

  onEdit(event): void {
    this.dialog.fillData(event.data);
  }

}
