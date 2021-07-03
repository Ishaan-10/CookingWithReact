import React,{useContext} from 'react'
import Reciepe from './Reciepe'
import { ReciepeContext } from './App'

export default function RecipeList({ reciepes}) {
    const {handleAddReciepe} = useContext(ReciepeContext);
    return (
        <>
            <div className="reciepe-list">
                <div>
                    {reciepes.map((reciepe) => {
                        return <Reciepe {...reciepe} 
                        key={reciepe.id}/>
                    })}
                </div>
                <div className="button-container">
                    <button className="btn btn--primary"
                    onClick={handleAddReciepe}>Add Recipe</button>
                </div>
            </div>
        </>
    )
}
