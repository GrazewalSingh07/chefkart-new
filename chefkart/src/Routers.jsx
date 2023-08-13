import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DishSelection } from './pages/DishSelection'
import { DishIngredients } from './pages/DishIngredients'


export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<DishSelection/>}/>
      <Route path='/ingredient-list' element={<DishIngredients/>}/>
    </Routes>
  )
}
