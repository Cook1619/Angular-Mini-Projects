import {Component} from '@angular/core';

@Component({
  selector: 'donut-form',
  template: `
    // registers our form as a angular form
    <form class="donut-form" #form="ngForm">
      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: []
})
export class DonutFormComponent {

}
