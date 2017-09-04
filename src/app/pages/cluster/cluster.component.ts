import { Component, ViewChild } from '@angular/core';
import {ClusterWizardComponent} from "./cluster-wizard/cluster-wizard.component";


@Component({
  selector: 'itdb-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss'],

})

export class ClusterComponent  {

  @ViewChild(ClusterWizardComponent)
  public readonly wizard: ClusterWizardComponent;

  constructor() { }


}
