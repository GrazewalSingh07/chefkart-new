import { Divider, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {GrPrevious } from "react-icons/gr"
import { HeaderDate } from '../components/HeaderDate'
import { Tags } from '../components/Tags'
import { PopularDishes } from '../components/PopularDishes'
import { Recommended } from '../components/Recommended'
import axios from 'axios'
export const DishSelection = () => {
    const [current,setCurent]= useState('')
    const [dishes,setdishes]= useState(null)
    const [popDishes,setPopDishes]= useState(null)
    useEffect(()=>{
        getData()
            },[])
            const getData=()=>{
                axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/').then((res)=>{
                    setdishes(res?.data.dishes)
                    setPopDishes(res.data.popularDishes)
                }).catch((err)=>{
                    console.log(err)
                })
            }
  return (
    <div className='max-md:p-3 p-10'>
        <header className='flex items-center'><IconButton><GrPrevious/></IconButton>
        <p className='font-semibold text-2xl px-5' >Select Dishes</p></header>
        <HeaderDate/>
        <Tags current={current} setCurent={setCurent}/>
        <PopularDishes data={popDishes}/>
        <div className='h-[10px] w-full bg-slate-200'></div>
        <Recommended dishes={dishes}/>
    </div>
  )
}
