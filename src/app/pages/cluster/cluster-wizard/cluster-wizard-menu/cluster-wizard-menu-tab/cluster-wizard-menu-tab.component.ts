import { Component, Input } from '@angular/core';

@Component({
  selector: 'nile-cluster-wizard-menu-tab',
  templateUrl: './cluster-wizard-menu-tab.component.html',
  styleUrls: ['./cluster-wizard-menu-tab.component.scss']
})

export class ClusterWizardMenuTabComponent {

  @Input('tabTitle')
  title: string;

  @Input()
  active = false;
}
