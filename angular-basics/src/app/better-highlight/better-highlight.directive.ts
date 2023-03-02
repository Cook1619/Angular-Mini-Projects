import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit{
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseEnter(event: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }
  @HostListener('mouseleave') mouseLeave(event: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
  }
}
