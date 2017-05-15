import { Component, AfterViewInit, HostListener, Input } from '@angular/core';

import 'style-loader!./tooltip-content.component.scss';

@Component({
  selector: 'nile-tooltip-content',
  templateUrl: './tooltip-content.component.html'
})

export class TooltipContentComponent implements AfterViewInit {

  @Input() title: string;
  @Input() ref: any;

  ngAfterViewInit(): void {
    // position based on `ref`
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    // update position based on `ref`
  }

}
