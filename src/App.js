import  React  from 'react';
import RecipeList from './RecipeList';

function App() {

  return (
    <div>
      <RecipeList reciepes={sampleRecipes} />
    </div>

  );
}

const sampleRecipes=[
  {
    id:1,
    name:"Plain Chicken",
    servings:3,
    cookTime:"1:45",
    instructions:"1.Put salt in chicken 2.Put salt in chicken 3.Put salt in chicken"
  },
  {
    id:2,
    name:"Rosted Chicken",
    servings:3,
    cookTime:"2:30",
    instructions:"1.Put salt in chicken 2.Put salt in chicken 3.Put salt in chicken"
  }
]
export default App;
