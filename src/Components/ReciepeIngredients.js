import React from 'react'

export default function ReciepeIngredients({ingredient,handleIngredientChange,handleIngredientDelete}) {

    const handleChange=(changes)=>{
        handleIngredientChange(ingredient.id,{...ingredient,...changes})
    }
    return (
        <div>
            <input type="text" className="reciepe_edit-edit" value={ingredient.name}
            onChange={e=> handleChange({name:e.target.value})}/>

            <input type="text" className="reciepe_edit-edit" value={ingredient.amount}
            onChange={e=> handleChange({amount:e.target.value})}/>

            <button className="btn" onClick={()=>handleIngredientDelete(ingredient.id)}>&times;</button>
        </div>
    )
}
