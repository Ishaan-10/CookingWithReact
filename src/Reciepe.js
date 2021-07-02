import React from 'react'

export default function Reciepe(props) {
    return (
        <div>
            <div><h3>{props.name}</h3></div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
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
            
            
        </div>
    )
}
