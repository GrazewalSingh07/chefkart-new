import React from 'react'
import { Dishes } from './Dishes'

export const PopularDishes = ({data}) => {
    const food=[{
        'image':'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg',
        name:'Biryani'
        
    },{
        image:'https://images.healthshots.com/healthshots/en/uploads/2022/09/30115812/idli.jpg',
       name:'Idli'
    },
{ 'image':'https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900',
name:'Dosa'}]
  return (
    <div className='py-2'>
        <h2 className='font-semibold text-xl'>Popular Dishes</h2>
        <div className='flex py-4  overflow-scroll  '>
        {data && food?.map((el)=>{
            return <Dishes name={el.name} image={el.image}/>
        })}
        {data?.map((el)=>{
            return <Dishes name={el.name} image={el.image}/>
        })}
      
        </div>
    </div>
  )
}
