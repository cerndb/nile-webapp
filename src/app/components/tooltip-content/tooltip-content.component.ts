import { Component, AfterViewInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'itdb-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss'],
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
