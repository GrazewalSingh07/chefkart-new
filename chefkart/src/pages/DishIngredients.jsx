import axios from 'axios'
import { Divider, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {GrPrevious } from "react-icons/gr"
 
import { useLocation, useNavigate } from 'react-router-dom'
import { IngredientHeader } from '../components/IngredientHeader'
import IngredientListing from '../components/IngredientListing'

export const DishIngredients = () => {
    const navigate= useNavigate()
    const location= useLocation()
    let id= location.state.id
    const [data,setData]= useState(null)
    const [preData,setPreData]= useState(null)
   useEffect(()=>{
    id=location.state.id
    setPreData(location.state.preData)
   },[location])

    useEffect(()=>{
    getData()
    },[id])
    const getData=()=>{
        axios.get(`https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`).then((res)=>{
        setData(res.data)
        console.log(res.data)
        }).catch((err)=>{

        })
    }

  return (
    <div className='max-md:p-3 p-10 pr-0 max-w-[1080px] relative m-auto'>
        <header className='flex items-center'><IconButton onClick={()=>{navigate(-1)}}><GrPrevious/></IconButton></header>
        <IngredientHeader data={data} preData={preData}/>
        <div>
            <IngredientListing data={data}/>
        </div>
    </div>
  )
}
