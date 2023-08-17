/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    return remainingTime === 0 ? "Lasagna is done." : remainingTime === undefined ? "You forgot to set the timer." : "Not done, please wait.";
}

export function preparationTime(layers, qtd = 2) {
    return layers.length * qtd
}

export function quantities(layers) {
    const quantitiesToMeal = {
        'noodles' : 50, //50g
        'sauce' : 0.2 //0.2l
    }

    return {
        noodles : preparationTime(
            layers.filter(obj => obj === 'noodles'), 
            quantitiesToMeal.noodles
        ),

        sauce : preparationTime(
            layers.filter(obj => obj === 'sauce'),
            quantitiesToMeal.sauce
        )
    }
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length-1])
}


// It's possible to use object destructuring as well. 
// However, this approach is less dynamic.
export function scaleRecipe(recipe, portions) {
    const personPerPortion = portions/2
    
    return  Object.fromEntries(
        Object.entries(recipe).map(([key, value]) => [key, value * personPerPortion])
    );
} 
