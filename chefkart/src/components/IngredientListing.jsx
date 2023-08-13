import { Divider } from '@mui/material'
import React from 'react'
import { Listing } from './Listing'
 

export default function IngredientListing({data}) {
  return (
    <div>
        <p className='font-bold text-2xl py-2'>Ingredients</p>
        <p className='text-gray-500'>For 2 people</p>
        <Divider className='py-4'/>

        <div>
            
              <Listing data={data} name={'Vegetables'}/>
        
        </div>
        <div>
              <Listing data={data} name={'Spices'}/>
           
        </div>
        <div>
            
              <Listing data={data} name={'Appliances'}/>
            
        </div>
    </div>
  )
}
