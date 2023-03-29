import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <div *ngIf="donuts.length">
        <donut-card [donut]="donuts[0]"></donut-card>
        <donut-card [donut]="donuts[1]"></donut-card>
        <donut-card [donut]="donuts[2]"></donut-card>
      </div>
    </div>
  `,
  styles: []
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'as1234',
        name: 'Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For chocolate lovers',
        promo: true
      },
      {
        id: 'adsd234',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Perfect for all',
      },
      {
        id: 'as1456hgf4',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate with caramel swirl'
      }
    ]
  }
}
