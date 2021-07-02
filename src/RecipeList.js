import React from 'react'
import Reciepe from './Reciepe'

export default function RecipeList({ reciepes }) {
    return (
        <div>
            {reciepes.map((reciepe) => {
               return <Reciepe {...reciepe} key={reciepe.id} />
            })}
        </div>
    )
}
