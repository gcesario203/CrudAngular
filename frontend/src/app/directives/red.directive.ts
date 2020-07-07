import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[hearthRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red'
   }

}
