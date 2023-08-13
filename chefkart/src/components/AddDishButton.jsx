import { Button } from '@mui/material'
import React from 'react'

export const AddDishButton = ({image}) => {
  return (
    <div className='max-h-[200px]'>
       <div className='max-md:h-[100px] max-md:w-[120px] h-[120px] w-[180px] rounded-lg relative ' style={{backgroundImage:`url(${image})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
       <Button variant='contained' size='large' className=' !bg-white !text-orange-500 !border-1 !border-orange-500 !border-solid !capitalize !font-medium !absolute !top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%]'   endIcon={<p className='-top-1 absolute  right-1'>+</p>
    } >Add</Button>
     
    </div>
         
    </div>
  )
}
