import {Component} from '@angular/core';

@Component({
  selector: 'donut-form',
  template: `
<!-- Registers our form as a angular form-->
<!-- Creating an #form=ngModel helps keep track of whatever you add the ngModel to a creates an object for us-->
    <form class="donut-form" #form="ngForm">
      <label>
        <span>Name</span>
        <input type="text" name="name" class="input" ngModel>
      </label>
      <label>
        <span>Price</span>
        <input type="number" name="price" class="input" ngModel>
      </label>
      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: []
})
export class DonutFormComponent {

}
