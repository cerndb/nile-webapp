import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nile-cluster-wizard-attributes',
  templateUrl: './cluster-wizard-attributes.component.html',
  styleUrls: ['./cluster-wizard-attributes.component.scss']
})
export class ClusterWizardAttributesComponent implements OnInit {

  @ViewChild('attributesForm')
  public attributesForm: NgForm;

  // Use to disabled HTML tags
  public create: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
