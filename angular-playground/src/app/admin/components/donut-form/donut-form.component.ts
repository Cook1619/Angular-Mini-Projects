import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-form',
  template: `
    <!-- Registers our form as a angular form-->
    <!-- Creating an #form=ngModel helps keep track of whatever you add the ngModel to a creates an object for us-->
    <form class="donut-form" #form="ngForm">
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          class="input"
          required
          minlength="5"
          [ngModel]="donut.name"
          [ngModelOptions]="{ updateOn: 'blur' }"
          #name="ngModel"
        />
        <ng-container *ngIf="name.invalid && name.touched">
          <div class="donut-form-error" *ngIf="name.errors?.minlength">
            Minimum length of a name is 5!
          </div>
          <div class="donut-form-error" *ngIf="name.errors?.required">
            Name is required.
          </div>
        </ng-container>
      </label>
      <label>
        <span>Icon</span>
        <select
          name="icon"
          class="input input--select"
          required
          [ngModel]="donut.icon"
          #icon="ngModel"
        >
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
        <input
          type="number"
          name="price"
          class="input"
          required
          [ngModel]="donut.price"
          #price="ngModel"
        />
        <ng-container *ngIf="price.invalid && price.touched">
          <div class="donut-form-error" *ngIf="price.errors?.required">
            Price is required.
          </div>
        </ng-container>
      </label>
      <div class="donut-form-radios">
        <p class="donut-form-radios-label">Promo:</p>
        <!-- use ngValue instead of value because its not limited by data types-->
        <label>
          <input
            type="radio"
            name="promo"
            [value]="undefined"
            [ngModel]="donut.promo"
          />
          <span>None</span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="new"
            [ngModel]="donut.promo"
          />
          <span>New</span>
        </label>
        <label>
          <input
            type="radio"
            name="promo"
            value="limited"
            [ngModel]="donut.promo"
          />
          <span>Limited</span>
        </label>
      </div>
      <label>
        <span>Description</span>
        <textarea
          name="description"
          class="input input--textarea"
          required
          [ngModel]="donut.description"
          #description="ngModel"
        ></textarea>
        <ng-container *ngIf="description.invalid && description.touched">
          <div class="donut-form-error" *ngIf="description.errors?.required">
            Description is required.
          </div>
        </ng-container>
      </label>
      <button type="button" class="btn btn--green" (click)="handleCreate(form)">
        Create
      </button>
      <button
        type="button"
        class="btn btn--green"
        [disabled]="form.untouched"
        (click)="handleUpdate(form)"
      >
        Update
      </button>
      <!-- We can use resetForm to pass a callback to set values back to initial state if needed-->
      <button
        type="button"
        class="btn btn--grey"
        (click)="form.resetForm({ name: 'Initial state' })"
      >
        Reset Form
      </button>
      <div class="donut-form-working" *ngIf="form.valid && form.submitted">
        Working...
      </div>
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

        &-working {
          font-size: 12px;
          font-style: italic;
          margin: 10px 0;
        }

        &-error {
          font-size: 12px;
          color: #e66262;
        }
      }
    `,
  ],
})
export class DonutFormComponent {
  @Input() donut!: Donut;
  @Output() create = new EventEmitter<Donut>();
  @Output() update = new EventEmitter<Donut>();
  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon',
  ];

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }

  handleUpdate(form: NgForm) {
    if (form.valid) {
      this.update.emit({ id: this.donut.id, ...form.value });
    } else {
      form.form.markAllAsTouched();
    }
  }
}
