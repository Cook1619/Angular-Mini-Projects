import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";

// the else noDonuts creates a reference variable to tell angular if there are no donuts render 'noDonuts'
// 'noDonuts' is now using that reference variable in a ng-template
@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else noDonuts">
        <donut-card
          *ngFor="let donut of donuts"
          [donut]="donut">
        </donut-card>
      </ng-container>

      <ng-template #noDonuts>
        <p>No Donuts here ....</p>
      </ng-template>
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
