import React from 'react'
import styles from './NotFoundBlock.module.scss'
console.log(styles)

function NotFoundBlock() {
  return (
    <div className={styles.root}>
    <span>эх</span>
    <h1>Ничего не найдено...</h1>
    <p>К сожалению данная интернет страница отсутствует в нашем интернет-магазине</p>
    </div>
  )
}

export default NotFoundBlock