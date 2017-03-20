import { Component } from '@angular/core';
import {ClusterTableSevice} from "./cluster-table.service";
import {LocalDataSource} from "ng2-smart-table";


import 'style-loader!./cluster-table.component.scss';

@Component({
  selector: 'cluster-table',
  templateUrl: './cluster-table.component.html'
})

export class ClusterTable  {

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
      clusterName: {
        title: 'ClusterName',
        type: 'string',
      },
      userName: {
        title: 'UserName',
        type: 'string',
        editable: false
      },
      egroup: {
        title: 'Egroup',
        type: 'string',
        editable: false
      },
      category: {
        title: 'Category',
        type: 'string',
        editable: false
      },
      project: {
        title: 'Project',
        type: 'string',
        editable: false
      },
      description: {
        title: 'Description',
        type: 'string',
        editable: false
      },
      type : {
        title: 'Type',
        type: 'string',
        editable: false
      }
    }
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ClusterTableSevice) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }


}
