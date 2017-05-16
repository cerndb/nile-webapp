import { Component, OnInit } from '@angular/core';
import { TooltipService } from './tooltip.service';

import 'style-loader!./tooltip-container.component.scss';

@Component({
  selector: 'nile-tooltip-container',
  templateUrl: './tooltip-container.component.html'
})

export class TooltipContainerComponent implements OnInit {

  constructor(private tooltipService: TooltipService) { }

  ngOnInit() {
  }

}

