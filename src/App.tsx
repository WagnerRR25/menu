import { useState } from 'react';
import { Card } from './components/card/ card';
import { foodData } from './interface/FoodData';
import './App.css'

function App() {
  const data: foodData[] = [];

  return (
      <div className='Container'>
       <h1>Menu</h1>
       <div className='card-grid'>
        {data.map(foodData => 
        <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image}
        />)}
       </div>
      </div>
  )
}

export default App
