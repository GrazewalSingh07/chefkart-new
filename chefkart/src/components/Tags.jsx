import { Chip } from '@mui/material'
import React from 'react'

const countries=['South Indian', 'Chinese', 'North Indian', 'Korean']
export const Tags = ({current,setCurent}) => {
    
  return (
    <div className='py-6 px-2 flex overflow-scroll justify-between max-w-md'>
         {countries.map((el)=>{
            return <Chip onClick={()=>{
                if(current==el){
                    setCurent('')
                }else{
                    setCurent(el)
                }
                 
            }}  sx={{marginX:'10px'}} label={el} color={current==el?'warning':'default'}  variant="outlined" />
         })}
    </div>
  )
}
