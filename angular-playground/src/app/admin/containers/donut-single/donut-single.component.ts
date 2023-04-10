import {Component, OnInit} from '@angular/core';
import {Donut} from "../../models/donut.model";
import {DonutService} from "../../services/donut.service";

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

  constructor(private donutService: DonutService) {
  }

  ngOnInit() {
    const id = 'adsd234';
    this.donut = this.donutService.findById(id);
  }

  onCreate(donut: Donut) {
    console.log('donut', donut)
  }
}
