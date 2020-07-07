import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{
  @Input('myForEm') number:number[]

  constructor(
    private container:ViewContainerRef,
    private template:TemplateRef<any>) {

  }

  ngOnInit():void{
    for(let number of this.number){
      this.container.createEmbeddedView(this.template, {$implicit: number})
    }
  }

}
