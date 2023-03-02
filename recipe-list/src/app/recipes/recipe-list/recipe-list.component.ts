import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() showRecipeDetail = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.showRecipeDetail.emit(recipe);
  }
  recipes: Recipe[] = [
    new Recipe(
      'Chili',
      'A spicy soup',
      `https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Sunday-Chili.jpg`
    ),
    new Recipe(
      'Tortilla Soup',
      'A savory soup',
      `https://natashaskitchen.com/wp-content/uploads/2020/10/Chicken-Tortilla-Soup-5.jpg`
    ),
  ];
}
