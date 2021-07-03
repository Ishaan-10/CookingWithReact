import React from 'react';
import RecipeList from './RecipeList';
import { useState,useEffect } from 'react';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';
import ReciepeEdit from './ReciepeEdit';

export const ReciepeContext = React.createContext()
const LOCAL_STORAGE_KEY='cookingWithReact.recipes'
function App() {

  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(()=>{
    const reciepeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(reciepeJSON!=null){
      setRecipes(JSON.parse(reciepeJSON));
    }
  },[])
  
  useEffect(()=>{
    console.log('rendered')
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes));
  },[recipes])

  const handleAddReciepe = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: "1:00",
      instructions: "1.Put salt in chicken 2.Put salt in chicken 3.Put salt in chicken",
      ingredients: [{
        id: uuidv4(),
        name: "Chicken",
        amount: "2 pounds"
      }]
    }
    setRecipes([...recipes, newRecipe]);
  }

  const handleRecipeDelete = (id) => {
    const newlist = recipes.filter(recipe => recipe.id !== id)
    setRecipes(newlist)
  }
  const ReciepeContextValue = {
    handleAddReciepe,
    handleRecipeDelete
  }

  return (
    <div>
      <ReciepeContext.Provider value={ReciepeContextValue}>
        <RecipeList
          reciepes={recipes} />
        <ReciepeEdit />
      </ReciepeContext.Provider>
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "1.Put salt in chicken 2.Put salt in chicken 3.Put salt in chicken",
    ingredients: [{
      id: 1,
      name: "Chicken",
      amount: "2 pounds"
    },
    {
      id: 2,
      name: "Herbs and Spices",
      amount: "A little"

    }
    ]
  },
  {
    id: 2,
    name: "Rosted Chicken",
    servings: 3,
    cookTime: "2:30",
    instructions: "1.Put salt in chicken 2.Put salt in chicken 3.Put salt in chicken",
    ingredients: [{
      id: 1,
      name: "Chicken",
      amount: "2 pounds"
    },
    {
      id: 2,
      name: "Coal",
      amount: "2 Pieces"

    }
    ]
  }
]
export default App;
