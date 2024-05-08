import '/src/scss/AssetModal.sass';
import { useContext } from 'react';
import dataContext from '/src/utils/dataContext.js';
import { createElement } from 'react';
import Images from '/src/data/images.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';

const AssetModal = () => {
  const { assetData, /*specialsData,*/ showModal, setShowModal, assetUUID } = useContext(dataContext);

  let assetIndex,
    // specialsIndex,
    compiledIngredients = [],
    compiledDirections = [];

  // find matching recipe uuid in recipes.json
  assetData.find((asset, index) => (asset.uuid === assetUUID ? (assetIndex = index) : null));
  // destructure assets
  const {
    ingredients,
    directions,
    images: { medium },
    title,
    editDate,
    prepTime,
    cookTime,
    servings,
  } = assetData[assetIndex];

  // build ingredients
  ingredients.map((ingred, index) => {
    const ingredientProps = {
      key: 'ingredient-' + index,
      ['data-uuid']: ingred.uuid,
    };
    const newIngredient = createElement('li', ingredientProps, ingred.amount ? ingred.amount + ' ' + ingred.measurement + ' - ' + ingred.name : ingred.name);

    /*
    // build specials
    console.log(specialsData);
    specialsData.find((special, index) => (special.ingredientUUID === ingred.uuid ? (specialsIndex = index) : null));
    // destructure specials
    const {
      // ingredientUUID,
      // type,
      title,
      // geo,
      text,
    } = specialsData[specialsIndex];

    const specialProps = {
      key: 'special-' + index,
      className: 'ingredient-special',
    };
    const textNode = (
      <div>
        <b>{title}</b>
        <br />
        {text}
      </div>
    );
    const newSpecial = createElement('li', specialProps, textNode);
    */

    compiledIngredients.push(newIngredient);
  });

  // build directions
  directions.map((dir, index) => {
    const newLI = createElement('li', { key: 'instruction-' + index }, dir.instructions);
    compiledDirections.push(newLI);
  });

  // build specials (insert in ingredients.map)
  // specialsStorage.map(obj => {
  // const special = '<li class="ingredient-special"><i class="fas fa-hand-point-right"></i><div><b>' + obj.title + '</b><br/>' + obj.text + '</div></li>';
  //   $('.ingredients li').each((index, li) => ($(li).data('uuid') === obj.ingredientId ? $(special).insertAfter($(li)) : null));
  // });

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <div data-uuid={assetUUID} className='recipe-preview col'>
        <div className='close-preview'>
          <i className='far fa-window-close'></i>
        </div>
        <div className='d-sm-flex d-md-inline-flex d-lg-inline-flex flex-sm-wrap flex-md-nowrap flex-lg-nowrap'>
          <div className='recipe-details-img'>
            <img src={Images[medium]} />
          </div>
          <div className='recipe-details'>
            <div className='recipe-date'>{editDate}</div>
            <table className='recipe-time'>
              <thead></thead>
              <tbody>
                <tr>
                  <td className='white'>
                    <FontAwesomeIcon icon={fas.faClock} />
                  </td>
                  <td>Prep :{prepTime}</td>
                  <td>Cook :{cookTime}</td>
                  <td className='white'>
                    <FontAwesomeIcon icon={fas.faUtensils} />
                  </td>
                  <td>Servings: {servings}</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            <div className='recipe-details-separator'>
              <h5>Ingredients</h5>
              <ul className='ingredients'>{compiledIngredients}</ul>
            </div>
            <div className='recipe-details-separator'>
              <h5>Directions</h5>
              <ol>{compiledDirections}</ol>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AssetModal;
