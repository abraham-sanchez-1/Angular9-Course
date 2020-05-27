import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','this is simply a test','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg' ),
    new Recipe('Another Test Recipe','this is simply a test','https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_960_720.jpg' )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
