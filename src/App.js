import React,{useState,useEffect} from 'react';
import './App.css';
import {Recipe} from './Recipe';

const App = () => {

    const [recipes, setRecipes]=useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('');

    const APP_ID= "ac619a02";
    const API_KEY= "2717a1a3acdf4d048d3c8ea54ea2a231"	;

    // const request=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`;

    useEffect(() => {
            getRecipes();
    }, [query]) ;

    const getRecipes = async () =>{
      if(query !== '')
      {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
      const data= await response.json();
      // console.log(data);
      setRecipes(data.hits);
      console.log(data.hits);
      }
    }

    const updateSearch = e =>{
      setSearch(e.target.value);
    }

    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }


  return (
    <div className="App">
      <div className="container">
        <div className="row pt-5 justify-content-center align-items-center">
          <div className="col-md-12 text-center">
            <form onSubmit={getSearch}>
              <input type="text" className="shadow-none input-field" placeholder="Enter here...." value={search} onChange={updateSearch} />
              <button type="submit" className="btn pt-2 pb-2 pl-4 pr-4 text-light ml-4">
                SEARCH
              </button>
            </form> 
          </div>
        </div>
        <div className="recipes">
          {
              recipes.map(recipe => (
                    <Recipe key={recipe.recipe.calories}
                            title={recipe.recipe.label} 
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                            healthLabels={recipe.recipe.healthLabels}
                    />
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default App;
