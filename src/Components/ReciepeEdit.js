import React,{useContext} from 'react'
import ReciepeIngredients from './ReciepeIngredients';
import { ReciepeContext } from './App';
import { v4 as uuidv4 } from 'uuid';



export default function ReciepeEdit() {
    const {
        selectedReceipe,
        handleReciepeChange,
        handleReciepeSelect,
    } = useContext(ReciepeContext);

    const handleChange = (changes)=>{
        handleReciepeChange(selectedReceipe.id,{...selectedReceipe,...changes})
    }
    const handleIngredientChange = (id,ingredient)=>{
        const newIngredients =[...selectedReceipe.ingredients]
        const index = newIngredients.findIndex(r=>r.id===id)
        newIngredients[index]= ingredient
        handleChange({ingredients:newIngredients})
    }
    const handleIngredientAdd = ()=>{
        const newIngredient={
          id: uuidv4(),
          name: "",
          amount:"",
        }
        handleChange({ingredients:[...selectedReceipe.ingredients,newIngredient]});
      }
    const handleIngredientDelete = (ingredientId)=>{
        const filteredIngredients = selectedReceipe.ingredients.filter(i=> i.id !== ingredientId);
        console.log(filteredIngredients);
        handleChange({ingredients:filteredIngredients});
    }
    return (
        <div className="reciepe_edit">
            <div className="remove-button-container">
            <button className="btn" style={{backgroundColor:"red"}} onClick={()=>handleReciepeSelect(null)}>&times;</button>
            </div>

            <h2>Edit Section</h2>
            <div className="reciepe_edit-grid">

                <label htmlFor="name" className="reciepe_edit-label">Name</label>
                <input type="text" name="name" id="name" className="reciepe_edit-edit" value={selectedReceipe.name} onInput={e=>{
                    handleChange({name:e.target.value})
                }}/>

                <label htmlFor="cookTime" className="reciepe_edit-label">Cook-Time</label>
                <input type="text" name="cookTime" id="cookTime" className="reciepe_edit-edit" value={selectedReceipe.cookTime} onInput={e=>{
                    handleChange({cookTime:e.target.value})
                }} />

                <label htmlFor="name" className="reciepe_edit-label">Servings</label>
                <input type="number" name="servings" id="servings" min="1" className="reciepe_edit-edit" value={selectedReceipe.servings} onInput={e=>{
                    handleChange({servings:e.target.value})
                }}/>

                <label htmlFor="instructions" className="reciepe_edit-label">Instructions</label>
                <textarea name="instructions" id="instructions" cols="30" rows="10" className="reciepe_edit-edit" value={selectedReceipe.instructions} onInput={e=>{
                    handleChange({instructions:e.target.value})
                }}></textarea>
            </div>
            <br />
            <label className="reciepe_edit-label">Ingredients</label>
            <div className="reciepe-edit-ingredients">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
            </div>
            {selectedReceipe.ingredients.map(ingredient=>{
                return <ReciepeIngredients
                key={ingredient.id} 
                ingredient={ingredient}
                handleIngredientChange={handleIngredientChange}
                handleIngredientDelete={handleIngredientDelete} />
            })}

            <button className="btn" onClick={()=>handleIngredientAdd()}>Add Ingredient</button>

        </div>
    )
}
