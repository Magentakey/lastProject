export default class Project {
  name = ""
  ingredients = []
  instructions = []
  prepTimeMinutes = 0
  cookTimeMinutes = 0
  difficulty = ""
  cuisine = ""
  caloriesPerServing = 0
  tags = []
  image = ""
  rating = 0
  mealType = 0

  constructor(initializer) {
    this.id = initializer.id;
    this.name = initializer.name;
    this.ingredients = initializer.ingredients;
    this.instructions = initializer.instructions;
    this.prepTimeMinutes = initializer.prepTimeMinutes;
    this.cookTimeMinutes = initializer.cookTimeMinutes;
    this.difficulty = initializer.difficulty;
    this.cuisine = initializer.cuisine;
    this.caloriesPerServing = initializer.caloriesPerServing;
    this.tags = initializer.tags;
    this.image = initializer.image;
    this.rating = initializer.rating;
    this.mealType = initializer.mealType;

  }
}