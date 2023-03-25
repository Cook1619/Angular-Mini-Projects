import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { TestComponentComponent } from './test-component/test-component.component';



@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    TestComponentComponent
  ],
  exports: [
    DonutListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
