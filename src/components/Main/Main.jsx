import React from 'react'
import styles from './Main.module.scss'
import ReactPlayer from 'react-player'

const Main = ({ recipes, fetchData, saveRecipe, isLoading }) => {

  return (<div className={styles.main}>
    <button className={styles.btn} onClick={fetchData}>Случайный рецепт</button>
    {isLoading ?
      <div className="d-flex justify-content-center">
        <div style={{ margin: '100px' }} className="spinner-border " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      : recipes.map((recipe) => {
        return <div key={recipe.idMeal} className={styles.recipes}>
          <button className={styles.btn} onClick={() => saveRecipe(recipe.idMeal)}>Добавить в избранные</button>
          <h1 style={{color:'blueviolet'}} key={recipe.idMeal}>{recipe.strMeal}</h1>
          <p>Страна: <strong style={{ color: 'blueviolet' }}>{recipe.strArea}</strong></p>
          <p>{recipe.strInstructions}</p>
          <div className={styles.aboutRecipe}>
            <div className={styles.photoRecipe}><img src={recipe.strMealThumb} alt={recipe.strMeal}/></div>
            <div className={styles.videoRecipe}>
              <ReactPlayer width="100%" height="100%" controls
                           url={`https://www.youtube.com/embed/${recipe.strYoutube}`}/>
            </div>
          </div>
        </div>
      }) }


  </div>)
}

export default Main