import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // This way you can only click on the dropdown area
  // @HostBinding('class.open') isOpen: boolean = false;
  //
  // constructor() { }
  //
  // @HostListener('click') toggleOpen(event: Event){
  //   this.isOpen = !this.isOpen
  // }
  // This way enables you to click anywhere for the dropdown to go away
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
