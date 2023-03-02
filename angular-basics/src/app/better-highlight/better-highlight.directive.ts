import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseEnter(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
    this.backgroundColor = this.highlightColor
  }
  @HostListener('mouseleave') mouseLeave(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor
  }
}
