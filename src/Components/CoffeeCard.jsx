import React from 'react'
import styles from './CoffeeCard.module.css'
const CoffeeCard = (coffee) => {
    const { image, title, price, description, ingredients } = coffee;
  return (
    <>
    
    <div className={styles.card}>
       <img src={image} alt="" />
       <div className={styles.description}>
          <h2>{title}</h2>
          <p>${price}</p>
          <p>{description}</p>
          <ul>
            {ingredients.map((ingredient, index)=>(
                <li key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
       </div>
    </div>
  
    </>
  )
}

export default CoffeeCard