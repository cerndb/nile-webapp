import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

import 'style-loader!./project-dropdown-menu.component.scss';

@Component({
  selector: 'nile-project-dropdown-menu',
  templateUrl: './project-dropdown-menu.component.html'
})

export class ProjectDropdownMenuComponent implements OnInit {

  egroupList: any[];
  egroupSelected: string;

  constructor(private _service: ProjectService) {
    this._service.getEgroupsList().then(data => this.egroupList = data);
    for(var key in this.egroupList)
    {
      console.log(key);
    }
//    this.egroupSelected = this.egroupList;
  }

  ngOnInit() {
  }



}
