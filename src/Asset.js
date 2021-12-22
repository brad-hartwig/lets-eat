import React,{ useState, useEffect} from 'react';
import './Asset.sass';

const Asset = () => {
  const [recipesData, setRecipesData] = useState([]);
  const getRecipesData = () => {
    fetch('./recipes.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function(response){
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setRecipesData(myJson);
      });
  }
  useEffect(() => {
    getRecipesData()
  },[])

  const recipesHTML = recipesData.map((recipe, index) => {
    return(
      <div key={index} className="col mb-5 card-wrap" data-uuid={recipe.uuid}>
        <div className="card h-100">
          <div className="card-img-wrap">
            <img className="card-img-top" src={recipe.images.small} alt="..." />
          </div>
            <div className="card-body p-4">
              <div className="">
                <h5 className="fw-bolder">{recipe.title}</h5>
                {recipe.description}<br/>
              </div>
            </div>
            {/* Recipe actions */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="recipe-rating"> + assignStars(recipe) + </div>
            </div>
        </div>
      </div>
    )
  })

  return(
    <>
      {recipesHTML}
    </>
  );
}
 
export default Asset;