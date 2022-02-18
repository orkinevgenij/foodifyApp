import React from 'react'
import styles from './Footer.module.scss'

const Footer = (props) => {
  return (<ul className={styles.footer}>
      <li>Главная</li>
      <li>Контакты</li>
      <li>О нас</li>
    </ul>
  )
}

export default Footer