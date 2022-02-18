import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import FavoriteRecipes from './components/FavoriteRecipes/FavoriteRecipes'
import MyRecipes from './components/MyRecipes/MyRecipes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App () {
  const recipesFromLocalStorage = JSON.parse((localStorage.getItem('selectedRecipes')) || '[]')

  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRecipes, setSelectedRecipes] = useState(recipesFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('selectedRecipes', JSON.stringify(selectedRecipes))
  }, [selectedRecipes])

  const fetchRecipes = () => {
    setIsLoading(true)
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => {
        setRecipes(response.data.meals)
        setIsLoading(false)
      }).catch(error => {
      console.log(error, 'error loading')
    })
  }
  useEffect(() => {
  }, [])
  const saveRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.idMeal !== id))
    setSelectedRecipes([...selectedRecipes, ...recipes.filter(recipe => recipe.idMeal === id)])
    fetchRecipes()
  }
  const delRecipe = (id) => {
    setSelectedRecipes(selectedRecipes.filter(recipe => recipe.idMeal !== id))
  }

  return (<div className="App">
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route
          path="/*"
          element={<Main
            recipes={recipes}
            fetchData={fetchRecipes}
            saveRecipe={saveRecipe}
            isLoading={isLoading}
          />}
        />
        <Route path="/favorite" element={<FavoriteRecipes selectedRecipes={selectedRecipes} delRecipe={delRecipe}/>}/>
        <Route path="/myrecipes" element={<MyRecipes/>}/>
      </Routes>
      <Footer/>
    </div>
  </div>)
}

export default App