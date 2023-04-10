import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";

// the else noDonuts creates a reference variable to tell angular if there are no donuts render 'noDonuts'
// 'noDonuts' is now using that reference variable in a ng-template
@Component({
  selector: 'donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else noDonuts">
        <donut-card
          *ngFor="let donut of donuts; trackBy: trackById"
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

  constructor(private donutService: DonutService) {
  }

  ngOnInit(): void {
    this.donuts = this.donutService.findAll();
  }

  trackById(index: number, value: Donut){
    return value.id
  }
}
