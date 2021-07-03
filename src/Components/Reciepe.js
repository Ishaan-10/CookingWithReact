import React,{useContext} from 'react'
import IngredientList from './IngredientList'
import { ReciepeContext } from './App'

export default function Reciepe(props) {

    const {handleRecipeDelete,handleReciepeSelect}=useContext(ReciepeContext);


    return (
        <div className="reciepe">
            <div className="reciepe-header">
            <h3 className="reciepe-title">{props.name}</h3>
                <button className="btn" onClick={()=>{handleReciepeSelect(props.id)}}>Edit</button>
                <button className="btn" onClick={()=>{handleRecipeDelete(props.id)}}>Delete</button>
            </div>
            <div>
                <span>Cook time</span>
                <span> {props.cookTime}</span>
            </div>
            <div>
                <span>Serving</span>
                <span> {props.servings}</span>
            </div>
            <div>
                <span>Instructions</span>
                <div>
                {props.instructions}
                </div>
            </div>
            <div>
                <IngredientList ingredients={props.ingredients} />
            </div>
            
            
        </div>
    )
}
