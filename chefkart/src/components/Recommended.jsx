import React, { useEffect } from 'react'
import { DishListing } from './DishListing'
import axios from 'axios'
import { Button, InputAdornment, MenuItem, TextField } from '@mui/material'

export const Recommended = ({dishes}) => {
const value=[ {
    value: 'recommended',
    label: 'Recommended',
  }, {
    value: 'Popular',
    label: 'Popular',
  }, {
    value: 'All',
    label: 'All',
  },]

  return (
    <div className='py-4 max-w-[1080px] m-auto'>
        <div className='flex justify-between px-2'>
        <TextField
        
        select
        
        defaultValue="recommended"
       
        variant="standard"
        sx={{'.MuiInputBase-input': { fontSize: '1.5rem', fontWeight:700 , background:'none'},"&:hover": {backgroundColor: "#FFF" }}}
        
        InputProps={{ disableUnderline: true , endAdornment:null}}
        
      
      >
        {value.map((option) => (
          <MenuItem   key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button className='!bg-black !capitalize !w-36' variant='contained'>Menu</Button>
        </div>

      <div className=' max-h-[720px] overflow-scroll' >
      {dishes?.map((el)=>{
        return  <div>
            <DishListing data={el}/>
            <div className='h-[2px] w-full bg-gray-200'></div>
        </div>
       })}
       {dishes?.map((el)=>{
        return  <div>
            <DishListing data={el}/>
            <div className='h-[2px] w-full bg-gray-200'></div>
        </div>
       })}
       {dishes?.map((el)=>{
        return  <div>
            <DishListing data={el}/>
            <div className='h-[2px] w-full bg-gray-200'></div>
        </div>
       })}
      </div>


    </div>
  )
}
