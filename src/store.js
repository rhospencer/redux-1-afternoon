import {createStore} from 'redux'

// INITIAL STATE
const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []

}

// ACTION CONSTANTS
export const RECIPE_NAME = 'RECIPE_NAME'
export const RECIPE_CATEGORY = 'RECIPE_CATEGORY'
export const FIRST_NAME = 'FIRST_NAME'
export const LAST_NAME = 'LAST_NAME'
export const INGREDIENTS = 'INGREDIENTS'
export const INSTRUCTIONS = 'INSTRUCTIONS'
export const RECIPES = 'RECIPES'

// REDUCER FUNCTION
const reducer = (state = initialState, action) => {
switch(action.type) {
    case RECIPE_NAME:
        return {...state, name: action.payload}
    case RECIPE_CATEGORY:
        return {...state, category: action.payload}
    case FIRST_NAME:
        return {...state, authorFirst: action.payload}
    case LAST_NAME:
        return {...state, authorLast: action.payload}
    case INGREDIENTS:
        const newIngredients = [...state.ingredients, action.payload]
        return {...state, ingredients: newIngredients}
    case INSTRUCTIONS:
        const newInstructions = [...state.instructions, action.payload]
        return {...state, instructions: newInstructions}
    case RECIPES:
        const {name, category, authorFirst, authorLast, ingredients, instructions, recipes} = state
        const recipe = {name, category, authorFirst, authorLast, ingredients, instructions, recipes}
        const newRecipes = [...state.recipes, recipe]
        return {...state, recipes: newRecipes}
    default:
        return state
}
}
// EXPORT
export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

