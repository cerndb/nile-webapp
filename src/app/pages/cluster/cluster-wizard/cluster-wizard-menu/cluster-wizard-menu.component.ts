import { AfterContentInit, Component, ContentChildren, QueryList }  from '@angular/core';
import { ClusterWizardMenuTabComponent } from './cluster-wizard-menu-tab/cluster-wizard-menu-tab.component';


@Component({
  selector: 'itdb-cluster-wizard-menu',
  templateUrl: './cluster-wizard-menu.component.html',
  styleUrls: ['./cluster-wizard-menu.component.scss']
})
export class ClusterWizardMenuComponent implements AfterContentInit {

  @ContentChildren(ClusterWizardMenuTabComponent)
  private tabs: QueryList<ClusterWizardMenuTabComponent>;

  constructor() { }

  // when contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }

  }

  selectTab(tab: ClusterWizardMenuTabComponent){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }

  selectFirstTab(): void {
    this.selectTab(this.tabs.first);
  }
}

