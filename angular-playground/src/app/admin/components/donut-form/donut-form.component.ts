import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'donut-form',
  template: `
    <!-- Registers our form as a angular form-->
    <!-- Creating an #form=ngModel helps keep track of whatever you add the ngModel to a creates an object for us-->
    <form class="donut-form" (ngSubmit)="handleSubmit(form)" #form="ngForm">
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          class="input"
          required
          minlength="5"
          ngModel
          #name="ngModel"/>
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="donut-form-error" *ngIf="name.errors?.minlength">
            Minimum length of name is 5!
          </div>
          <div class="donut-form-error" *ngIf="name.errors?.required">
            Name is required.
          </div>
        </ng-container>
      </label>

      <label>
        <span>Icon</span>
        <select name="icon" class="input input--select" required ngModel #icon="ngModel">
          <!-- use ngValue instead of value because its not limited by data types-->
          <option *ngFor="let icon of icons" [ngValue]="icon">
            {{ icon }}
          </option>
        </select>
        <ng-container *ngIf="icon.invalid && icon.touched">
          <div class="donut-form-error" *ngIf="icon.errors?.required">
            Icon is required.
          </div>
        </ng-container>
      </label>

      <label>
        <span>Price</span>
        <input type="number" name="price" class="input" required ngModel #price="ngModel"/>
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="donut-form-error" *ngIf="price.errors?.required">
            Icon is required.
          </div>
        </ng-container>
      </label>

      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo:</p>
        <label>
          <!-- this removes the property altogether when we set it undefined, which is what we want because that field only takes new or limited string values-->
          <input
            type="radio"
            name="promo"
            [value]="undefined"
            ngModel/>
          <span>None</span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="new"
            ngModel/>
          <span>New</span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="limited"
            ngModel/>
          <span>Limited</span>
        </label>
      </div>

      <label>
        <span>Description</span>
        <textarea
          name="description"
          class="input input--textarea"
          required
          ngModel
          #description="ngModel"
        >
        </textarea>
        <ng-container *ngIf="description.invalid && description.touched">
          <div class="donut-form-error" *ngIf="description.errors?.required">
            Icon is required.
          </div>
        </ng-container>
      </label>
      <button
        type="submit"
        class="btn btn--green">
        Create
      </button>
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

        &-error {
          font-size: 12px;
          color: #e66262;
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

  handleSubmit(form: NgForm) {
    if (form.valid) {
      console.log('form', form.value);
    }
    else {
      form.form.markAsTouched();
      console.log('invalid')
    }
  }
}
