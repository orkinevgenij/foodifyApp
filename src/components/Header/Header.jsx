import styles from './Header.module.scss'
import React from 'react'
import Menu from '../Menu/Menu'

const Header = (props) => {
  return (<div className={styles.header}>
      <Menu/>
    </div>
  )
}

export default Header