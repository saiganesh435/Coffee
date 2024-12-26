import React, { useState } from 'react'
import CoffeeCard from '../Components/CoffeeCard';
import styles from './Coffee.module.css'
const Coffee = () => {
    const [coffeeList,setCoffeeList]=useState([]);
    const[isLoading,setLoading]=useState(false);
    const fetchdata= async()=>{
        setLoading(true);
        try {
            const response= await fetch('http://localhost:8080/coffee')
            const data = await response.json()
            console.log(data);
            setCoffeeList(data);
        } catch (error) {
            console.log("Error fetching coffee data", error);
        }finally{
            setLoading(false);
        }
    }

  return (
    <>
  <div className={styles.coffee}>
     <button onClick={fetchdata} >Get Coffee</button>
     {isLoading&&<p>Loading... </p>}
     </div>
     <div className={styles.coffeelist}>
        {coffeeList.map((coffee)=>(
            <CoffeeCard key={coffee.id} {...coffee}/> 
        ))}
     </div>
     
  
  </>
  )
}

export default Coffee