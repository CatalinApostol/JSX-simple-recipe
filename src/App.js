import image from './images/perfection_salad.jpg'; // with import
import Ingredient from './components/Ingredient';
import Step from './components/Step';
function App() {
  const ingredients = [
    {
      name: "envelopes unflavored gelatine",
      quantity: "2"
    },
    {
      name: "cup sugar",
      quantity: "1/2"
    },
    {
      name: "teaspoon salt",
      quantity: "1"
    },
    {
      name: "can (12 oz) apple juice",
      quantity: "1"
    },
    {
      name: " cup lemon juice",
      quantity: "1/2"
    },
    {
      name: "tablespoons vinegar",
      quantity: "2"
    },
    {
      name: "cup shredded carrot",
      quantity: "1"
    },
    {
      name: "cup sliced celery",
      quantity: "1"
    },
    {
      name: "cup finely shredded cabbage",
      quantity: "1"
    },
    {
      name: "cup chopped green pepper",
      quantity: "1/2"
    },
    {
      name: "can (4 oz) chopped pimiento",
      quantity: "1"
    }
  ]
  const steps=[
    {step : "1.",
     text: "In small saucepan, combine gelatine, sugar, and salt; mix well."}
     ,
    {step: "2.",
     text:"Add 1 cup water. Heat over low heat, stirring constantly, until sugar and gelatine are dissolved. Remove from heat."}
     ,
    {step : "3.",
     text: "Stir in apple juice, lemon juice, vinegar, and 1/4 cup cold water. Pour into medium bowl. Refrigerate 1 hour, or until mixture is consistency of unbeaten egg white."}
     ,
    {step : "4.",
     text : "Add carrot, celery, cabbage, green pepper, and pimiento; stir until well combined."}
     ,
    {step : "5.",
     text: "Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until firm."}
     ,
    {step :'6.',
     text: "To unmold: Run small spatula around edge of mold; invert onto serving plate. Place hot dishcloth over mold; shake gently to release. Repeat, if necessary. Lift off mold. refrigerate until ready to serve."}
  ]
  const ingredientsList= ingredients.map( (ingredient) => (
    <li><Ingredient quantity={ingredient.quantity} name={ingredient.name} /></li>))
  
  const preparationSteps = steps.map((step) => (
    <ul> <Step step={step.step} text={step.text} /></ul>))
    
  
  return (
      <div>
          <h1>Grandma's recipes</h1>
          <img src={image}></img>
          <h2>Ingredients</h2>
          {ingredientsList}
          <h2>Preparations</h2>
          {preparationSteps}

      </div>
  );
}

export default App;
