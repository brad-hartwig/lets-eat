import React,{ useState, useEffect } from 'react';
import './Asset.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const assignStars = recipe => {
  if (recipe.rating > 0){
    const ratingSplit = recipe.rating.toString().split('.');
    let stars = [],
        i     = 1,
        total = 0;
    // full stars
    while (i <= ratingSplit[0]){
      stars.push(<FontAwesomeIcon icon={['fas', 'star']} key={total} />);
      i++;
      total++;
    }
    // half star
    if (ratingSplit[1] > 0){
      stars.push(<FontAwesomeIcon icon={['fas', 'star-half-alt']} key={total} />);
      total++;
    }
    // empty stars
    while (total < 5){
      stars.push(<FontAwesomeIcon icon={['far', 'star']} key={total} />);
      total++;
    }
    return <> {recipe.rating}<div className="stars-group" key={total + "-stars-group"}>{stars}</div> ({recipe.ratingVotes}) </>
  }
  else{
    return '';
  }
}

const Asset = () => {
  const [recipesData, setRecipesData] = useState([]);
  const getRecipesData = () => {
    fetch('./recipes.json')
      .then(resp => {
        return resp.json();
      })
      .then(myJson => {
        setRecipesData(myJson);
      });
  }
  useEffect(() => {
    getRecipesData()
  },[])

  const recipesHTML = recipesData && recipesData.length>0 && recipesData.map((recipe, index) => {
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
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="recipe-rating">{assignStars(recipe)}</div>
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