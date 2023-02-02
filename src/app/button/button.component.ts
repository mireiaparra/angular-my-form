import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color}">{{label}}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy{
  @Input() color!:string;
  @Input() label!:string;
constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', changes);
  }

  ngOnInit(): void {
    console.log('OnInit');
    
  }
  
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

}
