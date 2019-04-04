// https://angular.io/guide/attribute-directives
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  @Input('appHightlight') highlightColor: string;

  constructor(private el: ElementRef) { }

 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    //this.el.nativeElement this is like document.querySelector()
    this.el.nativeElement.style.backgroundColor = color;
  }

}
