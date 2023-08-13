import { Divider, MenuItem } from '@mui/material'
import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

export const Listing = ({data,name}) => {
  return (
    <div> 
        <h1 className='font-bold text-xl flex items-center py-4'>{name} {name!='Appliances'&& <AiFillCaretDown className='mx-2'/>}</h1>

        {name=='Vegetables' ? <div className=''>
              {   data?.ingredients.vegetables?.map((el,index)=>{
                    return  <div  key={index} className='!flex !justify-between'><p className='text-lg py-1 '>{el.name}</p> <p className='text-lg py-1 '>{el.quantity}</p> </div>
              })}
        </div>:name=='Spices'? <div>
              {   data?.ingredients.spices?.map((el,index)=>{
                    return  <div  key={index} className='!flex !justify-between'><p className='text-lg py-1 '>{el.name}</p> <p className='text-lg py-1 '>{el.quantity}</p> </div>
                  })}
        </div>:<div className='flex justify-between overflow-scroll max-w-[720px]'>
              {   data?.ingredients.appliances?.map((el,index)=>{
                    return  <div  key={index}> 
                     <div className='bg-gray-100 h-[120px] p-2 mx-2 w-[100px] rounded-md'>
                     { el.name=='Refrigerator'&& <img src='https://pngimg.com/d/refrigerator_PNG101546.png'/>}
                      { el.name=='Microwave'&& <img src=' https://www.pngall.com/wp-content/uploads/12/Microwave-PNG-Image.png'/>}
                      { el.name=='Stove'&& <img src='https://pngimg.com/d/gas_stove_PNG68.png'/>}
                     </div>
                     
                      <p className=' text-lg py-1  text-center'><span>{el.name}</span> </p>
                    </div>
              })}
        </div>}
      
    </div>
  )
}
