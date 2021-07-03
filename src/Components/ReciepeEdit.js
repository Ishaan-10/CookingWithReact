import React from 'react'
import ReciepeIngredients from './ReciepeIngredients'

export default function ReciepeEdit() {
    return (
        <div className="reciepe_edit">
            <button>&times;</button>
            <h1>Edit Section</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="Cook-Time">Cook-Time</label>
                <input type="text" name="Cook-Time" id="Cook-Time" />
                <label htmlFor="name">servings</label>
                <input type="number" name="servings" id="servings" min="1" />
                <label htmlFor="instructions">instructions</label>
                <textarea name="instructions" id="instructions" cols="30" rows="10"></textarea>
            </div>
            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
            </div>
            <button>Add Ingredient</button>
            <ReciepeIngredients />
        </div>
    )
}
