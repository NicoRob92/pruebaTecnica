import React from "react";
import styles from './Card.module.css'


const card = (props) => {
  const { title, src, year } = props
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <img src={src} alt='img' />
      <p>{year}</p>
    </div>
  )
}

export default card;