import styles from './MyRecipes.module.scss'
import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'

const MyRecipes = () => {
  const saveRecipeFromLocalStorage = JSON.parse((localStorage.getItem('saveRecipe')) || '[]')

  const [nameRecipe, setNameRecipe] = useState('')
  const [instruction, setInstruction] = useState('')
  const [saveRecipe, setSaveRecipe] = useState(saveRecipeFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('saveRecipe', JSON.stringify(saveRecipe))
  }, [saveRecipe])

  const addRecipe = () => {
    if (nameRecipe.trim().length && instruction.trim().length) {
      setSaveRecipe([
        ...saveRecipe,
        {
          id: uuid(),
          nameRecipe,
          instruction
        }
      ])
      setNameRecipe('')
      setInstruction('')
    }
  }

  const delRecipe = (id) => {
    setSaveRecipe(saveRecipe.filter(recipe => recipe.id !== id))
  }

  return (<div className={styles.recipes}>
      <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Создать рецепт
      </button>
      <div className={styles.myRecipes}>
        {saveRecipe.length > 0 ? saveRecipe.map((recipe) => {
          return <div className={styles.myRecipe} key={recipe.id}>
            <button className={styles.btn} onClick={() => delRecipe(recipe.id)}>Удалить рецепт</button>
            <h2 style={{ color: 'blueviolet' }}>{recipe.nameRecipe}</h2>
            <div>{recipe.instruction}</div>
          </div>
        }) : <span>Рецептов пока нет :(</span>}
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Мой рецепт</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
            </div>
            <div className="modal-body">
              <div className={styles.form}>
                <label htmlFor="nameRecipe">Введите название блюда:</label>
                <input
                  id="nameRecipe"
                  value={nameRecipe}
                  onChange={(e) => setNameRecipe(e.target.value)}/>
                <label htmlFor="instruction">Рецепт:</label>
                <textarea id="instruction" cols="30" rows="10"
                          value={instruction} onChange={(e) => setInstruction(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={addRecipe}>Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyRecipes