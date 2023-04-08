import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'donut-single',
  template: `
    <div>
      <donut-form [donut]="donut" (create)="onCreate($event)"></donut-form>
    </div>
  `,
  styles: []
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  ngOnInit() {
    this.donut = {
      id: 'adsd234',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 129,
      description: 'Perfect for all',
      promo: 'limited'
    }
  }

  onCreate(donut: Donut) {
    console.log('donut', donut)
  }
}
