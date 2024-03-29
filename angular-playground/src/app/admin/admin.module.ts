import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutListComponent } from './containers/donut-list/donut-list.component';
import { DonutCardComponent } from './components/donut-card/donut-card.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { DonutSingleComponent } from './containers/donut-single/donut-single.component';
import { DonutFormComponent } from './components/donut-form/donut-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    TestComponentComponent,
    DonutSingleComponent,
    DonutFormComponent,
  ],
  exports: [DonutListComponent, DonutSingleComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class AdminModule {}
