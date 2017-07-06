import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nile-cluster-wizard-size',
  templateUrl: './cluster-wizard-size.component.html',
  styleUrls: ['./cluster-wizard-size.component.scss']
})
export class ClusterWizardSizeComponent implements OnInit {

  @ViewChild('sizeForm')
  public sizeForm: NgForm;

  // Use to disabled HTML tags
  public create: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
