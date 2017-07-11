import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nile-cluster-wizard-type',
  templateUrl: './cluster-wizard-type.component.html',
  styleUrls: ['./cluster-wizard-type.component.scss']
})
export class ClusterWizardTypeComponent implements OnInit {

  @ViewChild('typeForm')
  public typeForm: NgForm;

  // Use to disabled HTML tags
  public create: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
