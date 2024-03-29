import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    // this.el.nativeElement.focus()
  }

  ngOnInit(): void {
    this.el.nativeElement.focus()
  }

}
