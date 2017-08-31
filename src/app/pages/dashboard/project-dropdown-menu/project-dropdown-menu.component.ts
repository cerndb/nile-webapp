import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';


@Component({
  selector: 'nile-project-dropdown-menu',
  templateUrl: './project-dropdown-menu.component.html',
  styleUrls: ['./project-dropdown-menu.component.scss']
})

export class ProjectDropdownMenuComponent implements OnInit {

  egroupList: any[];
  egroupSelected: string;

  constructor(private _service: ProjectService) {
  }

  ngOnInit() {
    this._service.getEgroupsList().then(data => {this.egroupList = data;
      this.egroupSelected = this.egroupList[0].name; } );
  }

  changeProject(data) {
    this.egroupSelected = data;
    //TODO: Add calls to refresh the rest of the views and pages.
  }



}
