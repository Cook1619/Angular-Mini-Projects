import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseEnter(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
    this.backgroundColor = 'green'
  }
  @HostListener('mouseleave') mouseLeave(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = 'transparent'
  }
}
