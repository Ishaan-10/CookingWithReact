import React from 'react'
import ReciepeIngredients from './ReciepeIngredients'

export default function ReciepeEdit() {
    return (
        <div className="reciepe_edit">
            <div className="remove-button-container">
            <button className="btn" style={{backgroundColor:"red"}}>&times;</button>
            </div>

            <h2>Edit Section</h2>
            <div className="reciepe_edit-grid">
                <label htmlFor="name" className="reciepe_edit-label">Name</label>
                <input type="text" name="name" id="name" className="reciepe_edit-edit"/>
                <label htmlFor="Cook-Time" className="reciepe_edit-label">Cook-Time</label>
                <input type="text" name="Cook-Time" id="Cook-Time" className="reciepe_edit-edit" />
                <label htmlFor="name" className="reciepe_edit-label">Servings</label>
                <input type="number" name="servings" id="servings" min="1" className="reciepe_edit-edit" />
                <label htmlFor="instructions" className="reciepe_edit-label">Instructions</label>
                <textarea name="instructions" id="instructions" cols="30" rows="10" className="reciepe_edit-edit"></textarea>
            </div>
            <br />
            <label className="reciepe_edit-label">Ingredients</label>
            <div className="reciepe-edit-ingredients">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
            </div>
            <ReciepeIngredients />
            <button className="btn">Add Ingredient</button>

        </div>
    )
}
