import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingrediant.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('Tomato Sauce', 4),
    new Ingredient('Diced Tomato', 2)
  ];
}
