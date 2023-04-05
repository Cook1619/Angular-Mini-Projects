import {Component} from '@angular/core';

@Component({
  selector: 'donut-form',
  template: `
<!-- Registers our form as a angular form-->
<!-- Creating an #form=ngModel helps keep track of whatever you add the ngModel to a creates an object for us-->
    <form class="donut-form" #form="ngForm">
      <label>
        <span>Name</span>
        <input type="text" name="name" class="input" required ngModel #name="ngModel" />
        {{ name.value }}
        {{ name.invalid }}
        {{ name.touched }}
        {{ name.untouched }}
        {{ name.dirty }}
      </label>

      <label>
        <span>Icon</span>
        <select name="icon" class="input input--select" required ngModel>
<!-- use ngValue instead of value because its not limited by data types-->
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>
      </label>

      <label>
        <span>Price</span>
        <input type="number" name="price" class="input" required ngModel />
      </label>

      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo:</p>
        <label>
<!-- this removes the property altogether when we set it undefined, which is what we want because that field only takes new or limited string values-->
          <input type="radio" name="promo" required [value]="undefined" ngModel />
          <span>None</span>
        </label>
        <label>
          <input type="radio" name="promo" required value="new" ngModel />
          <span>New</span>
        </label>
        <label>
          <input type="radio" name="promo" required value="limited" ngModel />
          <span>Limited</span>
        </label>
      </div>

      <label>
        <span>Description</span>
        <textarea
          name="description"
          class="input input--textarea"
          required
          ngModel>
        </textarea>
      </label>

      <pre>{{ form.value | json }}</pre>
    </form>
  `,
  styles: [
    `
      .donut-form {
        &-radios {
          display: flex;
          align-content: center;
          &-label {
            margin-right: 10px;
          }
          label {
            display: flex;
            align-items: center;
            span {
              color: #444;
              margin-bottom: 0;
            }
          }
        }
      }
    `
  ]
})
export class DonutFormComponent {
  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon'
  ];
}