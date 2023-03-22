import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <div>
        {{donut.name}}
        {{donut.price}}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donut!: any;
  donuts!: any[];
  ngOnInit(): void {
    this.donuts = [
      {
        id: 'as1234',
        name: 'Chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For chocolate lovers'
      },
      {
        id: 'adsd234',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Perfect for all'
      },
      {
        id: 'as1456hgf4',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate with caramel swirl'
      }
    ]
    this.donut = this.donuts[0];
  }
}
