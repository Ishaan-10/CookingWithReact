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
  const [selectedReciepeId,setSelectedReceipeId]=useState()
  const selectedReceipe = recipes.find(recipe => recipe.id===selectedReciepeId)
  useEffect(()=>{
    const reciepeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(reciepeJSON!=null){
      setRecipes(JSON.parse(reciepeJSON));
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes));
  },[recipes])

  const handleAddReciepe = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New Reciepe',
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [{
        id: uuidv4(),
        name: "",
        amount: ""
      }]
    }
    setRecipes([...recipes, newRecipe]);
    setSelectedReceipeId(newRecipe.id);
  }


  const handleRecipeDelete = (id) => {
    const newlist = recipes.filter(recipe => recipe.id !== id)
    setRecipes(newlist)
  }

  const handleReciepeSelect = (id)=>{
    setSelectedReceipeId(id)
  }
  const handleReciepeChange = (id,recipe)=>{
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id===id);
    newRecipes[index]=recipe;
    setRecipes(newRecipes);
  }
  const ReciepeContextValue = {
    handleAddReciepe,
    handleRecipeDelete,
    handleReciepeSelect,
    selectedReceipe,
    handleReciepeChange,
}

  return (
    <div>
      <ReciepeContext.Provider value={ReciepeContextValue}>
        <RecipeList
          reciepes={recipes} />
        {selectedReceipe &&<ReciepeEdit />}
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
