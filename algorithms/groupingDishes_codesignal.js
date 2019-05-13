function groupingDishes(dishes) {
  const ingredientsTable = generateIngredientsTable(dishes);
  const ingredientsArray = convertTableToArray(ingredientsTable);
  return ingredientsArray;
}

const generateIngredientsTable = dishes => {
  let ingredientsTable = {};
  for (let i = 0; i < dishes.length; i++) {
    let dish = dishes[i][0];
    for (let j = 1; j < dishes[i].length; j++) {
      const ingredient = dishes[i][j];
      if (ingredientsTable.hasOwnProperty(ingredient)) {
        ingredientsTable[ingredient].push(dish);
      } else {
        ingredientsTable[ingredient] = [dish];
      }
    }
  }
  return ingredientsTable;
};

const convertTableToArray = table => {
  console.log(table);
  let newArr = [];
  const ingredients = Object.keys(table).sort();
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];
    if (table[ingredient].length > 1) {
      newArr.push([ingredient, ...table[ingredient].sort()]);
    }
  }
  return newArr;
};
