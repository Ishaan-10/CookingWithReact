import React from 'react'

export default function ReciepeIngredients({ingredient}) {
    return (
        <div>
            <input type="text" className="reciepe_edit-edit" value={ingredient.name}/>
            <input type="text" className="reciepe_edit-edit" value={ingredient.amount}/>
            <button className="btn">&times;</button>
        </div>
    )
}
