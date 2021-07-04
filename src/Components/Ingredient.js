import React from 'react'

export default function Ingredient({name,amount}) {
    return (
        <div>
            <span className="reciepe-value">{name}</span>
            <span className="reciepe-value"> {amount}</span>
        </div>
    )
}
