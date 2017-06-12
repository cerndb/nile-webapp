/**
 * Created by adediosf on 12/05/17.
 */
import {Directive, Input, HostListener, OnDestroy, ElementRef} from '@angular/core';

import { TooltipService } from '../../elements/tooltip-container/tooltip.service';


@Directive({ selector: '[nileTooltip]' })
export class TooltipDirective implements OnDestroy {

  @Input() tooltipTitle: string = '';
  private id: number;

  constructor(private tooltipService: TooltipService, private element: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    console.log('tooltip-content enter');
    console.log(this.tooltipTitle);
    this.id = Math.random();
    this.tooltipService.components.push({
      id: this.id,
      ref: this.element,
      title: this.tooltipTitle
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {

    const idx = this.tooltipService.components.findIndex((t) => {
      return t.id === this.id;
    });

    this.tooltipService.components.splice(idx, 1);
  }


}
