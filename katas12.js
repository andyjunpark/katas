const ingredientCheck = function(bakery, recipes) {
  let bakeryIndex = []
  let recipesIndex = []
  let indexArray = []
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
        if (bakery[i] === recipes[j].ingredients[0]) {
          bakeryIndex.push(i)
          recipesIndex.push(j)
      } else if (bakery[i] === recipes[j].ingredients[1]) {
          bakeryIndex.push(i)
          recipesIndex.push(j)
      }
    } 
  } indexArray.push(bakeryIndex, recipesIndex)
  return indexArray
} 

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let indexA = ingredientCheck(bakeryA, recipes)
  let indexB = ingredientCheck(bakeryB, recipes)
  let indexRecipes = []
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      if (indexA[1][i] === indexB[1][j]) {
        indexRecipes.push(indexB[1][j])
      }
    }
  } return recipes[indexRecipes[0]].name
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// Expected Output
// Persian Cheesecake
// Nima's Famous Dijon Raisins