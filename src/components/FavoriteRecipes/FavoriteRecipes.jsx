import styles from './FavoriteRecipes.module.scss'
import React from 'react'

const FavoriteRecipes = ({ selectedRecipes, delRecipe }) => {
  return (<div className={styles.favorite}>
      {selectedRecipes.length > 0 ? selectedRecipes.map((recipe) => {
        return <div key={recipe.idMeal} className={styles.recipes}>
          <button className={styles.btn} onClick={() => delRecipe(recipe.idMeal)}>Удалить рецепт</button>
          <h1 style={{ color: 'blueviolet' }}>{recipe.strMeal}</h1>
          <p>Сountry:<strong style={{ color: 'blueviolet' }}>{recipe.strArea}</strong></p>
          <div>{recipe.strInstructions}</div>
          <div className={styles.photoRecipe}><img src={recipe.strMealThumb} alt={recipe.strMeal}/></div>
        </div>
      }) : <span>Рецептов пока нет :(</span>}
    </div>
  )
}

export default FavoriteRecipes