import React,{useContext} from 'react'
import IngredientList from './IngredientList'
import { ReciepeContext } from './App'

export default function Reciepe(props) {

    const {handleRecipeDelete,handleReciepeSelect}=useContext(ReciepeContext);


    return (
        <div className="reciepe"  style={{borderBottom:"1px solid black"}}>
            <div className="reciepe-header">
            <h3 className="reciepe-title">{props.name}</h3>
                <div className="buttons">
                <button className="btn" onClick={()=>{handleReciepeSelect(props.id)}}>Edit</button>
                <button className="btn" onClick={()=>{handleRecipeDelete(props.id)}}>Delete</button>
                </div>
            </div>
            <div>
                <span className="reciepe-heading">Cook time</span>
                <span className="reciepe-value"> {props.cookTime}</span>
            </div>
            <div>
                <span  className="reciepe-heading">Serving</span>
                <span  className="reciepe-value"> {props.servings}</span>
            </div>
            <div>
                <span className="reciepe-heading">Instructions</span>
                <div  className="reciepe-value" style={{whiteSpace:"pre-wrap"}}>
                {props.instructions}
                </div>
            </div>
            <div>
            <span className="reciepe-heading">Ingredients</span>
                <IngredientList ingredients={props.ingredients}/>
            </div>
            
            
        </div>
    )
}
