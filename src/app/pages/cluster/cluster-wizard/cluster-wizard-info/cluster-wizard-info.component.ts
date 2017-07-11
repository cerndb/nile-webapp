import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClusterEntity } from '../../../../api/model/clusterEntity';

@Component({
  selector: 'nile-cluster-wizard-info',
  templateUrl: './cluster-wizard-info.component.html',
  styleUrls: ['./cluster-wizard-info.component.scss']
})
export class ClusterWizardInfoComponent implements OnInit {

  @ViewChild('infoForm')
  public infoForm: NgForm;

  // Use to disabled HTML tags
  public create: boolean = true;

  private readonly categories;

  constructor() {
    this.categories = Object.keys(ClusterEntity.ModelClassEnum);
    console.log("init wizard info");

  }

  ngOnInit() {
  }

}
