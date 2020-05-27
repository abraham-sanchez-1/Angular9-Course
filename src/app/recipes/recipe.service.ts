import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Sweet Shrimp','Tasty shrimp on a bed of zesty rice','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg', [new Ingredient('Shrimp', 10), new Ingredient('Rice', 50)] ),
    new Recipe('Steak Dream','Tasy steak in beautiful sauce','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg' , [new Ingredient('Steak', 1), new Ingredient('Saunce', 10)] )
  ];


  getRecipes() {
    return this.recipes.slice();
  }
}
