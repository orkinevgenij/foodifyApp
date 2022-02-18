import React from 'react'
import styles from './Menu.module.scss'
import { NavLink } from 'react-router-dom'

const Menu = (props) => {
  return (
    <ul className={styles.menu}>
      <li><NavLink to="/main">Главная</NavLink></li>
      <li><NavLink to="/favorite">Избранные рецепты</NavLink></li>
      <li><NavLink to="/myrecipes">Собственные рецепты</NavLink></li>
    </ul>
  )
}

export default Menu