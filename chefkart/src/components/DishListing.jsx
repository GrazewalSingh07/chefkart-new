import React from 'react'
import { AddDishButton } from './AddDishButton'
import { Chip } from '@mui/material'
import {GrSquare} from 'react-icons/gr'
import {AiFillStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {BiFridge} from 'react-icons/bi'
import{LuMicrowave} from 'react-icons/lu'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

export const DishListing = ({data}) => {
    console.log({data})
    const navigate= useNavigate()
    const handleViewList=()=>{
    navigate(`/ingredient-list`,{state:{id:data.id, preData:data}})
    }
  return (
    <div className='flex pt-4 pb-2 justify-between'>
            <div className='pr-2 max-sm:min-w-[180px] min-w-[20%]'>
                <div className= 'flex  max-sm:max-w-[180px] max-sm:min-w-[120px]    min-w-[280px] max-w-[280px]  ] justify-between  items-center pb-2'>
                    <p className='font-semibold max-md:text-lg  text-2xl'>{data?.name}</p>
                        <GrSquare className='text-green-500 max-md:w-3 max-md:h-3  '/>
                      <div  className= ' bg-green-700 text-center text-[8px] p-[2px]  rounded-sm' ><span className='flex items-center text-white'>{data?.rating} <AiFillStar className='text-[8px]'/></span></div>
                </div>
                <div className='flex  max-md:min-w-[70px] max-w-[280px] justify-around pt-4 items-center'>


                    {data?.equipments?.map((el,index)=>{
                        return <div key={index} className=' m-auto items-center justify-center flex-col text-center'>
                            
                            {el=='Microwave'&&<LuMicrowave className='text-xl   '/>}
                            {el=='Refrigerator'&&<BiFridge className='text-xl text-center'/>}
                            <p className='capitalize text-[8px] '>{el}</p>
                        </div>

                    })}

                    <div className='h-[20px] w-[2px] bg-gray-400'></div>
                    <div className='px-2'>
                    <p className='font-semibold text-sm cursor-pointer px-2' >Ingredients</p>
                    <p className='font-semibold text-xs text-orange-500 flex items-center cursor-pointer px-2' onClick={()=>handleViewList()}>View list <MdOutlineArrowForwardIos className='ml-1'/> </p>
                    </div>
                        
                    
                </div>
                <p className='text-xl max-md:text-[12px] font-normal capitalize text-gray-500 py-2'>{data?.description}</p>
            </div>
            <AddDishButton image={data?.image}/>
    </div>
  )
}
