import React from "react";
import { AiFillStar } from "react-icons/ai";
import {AiOutlineClockCircle} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import veg2 from './veg2.png'
import veg3 from './veg3.png'

export const IngredientHeader = ({ data, preData }) => {
  
   
  return (
    <div className="py-4  overflow-hidden">
      <div className="flex !z-5 " >
        {" "}
       <div className="w-full">
       <div className="flex  items-center  w-[280px]">
         <h1 className="font-bold max-sm:text-2xl  text-3xl">{data?.name}</h1>
        <div className=" bg-green-500 text-center rounded-sm text-[8px] mx-2 p-1 max-h-6 ">
          <span className="flex items-center text-white">
            {preData?.rating} <AiFillStar className="text-sm" />
          </span>
         
        </div>
        
       </div>

       <div className="w-full">
            <p className="py-4 text-xl max-sm:text-sm z-10 text-gray-500 font-semibold capitalize ">
            {preData?.description}
            </p>
           
        </div> 
        <p className="flex font-bold mx-2 items-center max-sm:text-lg text-2xl mt-16 max-sm:mt-2">
                <AiOutlineClockCircle  className="text-2xl mx-2 " />
                {data?.timeToPrepare}
          </p>
       </div>

        <div className="relative w-full h-[340px] flex z-10 overflow-hidden">
       
      
       
     
     </div>
      </div>
      <div className="h-[5px] max-sm:-mt-36 w-full bg-gray-200"></div>
   
      <div
         style={{ clipPath: "circle(50% at 64% 53%)" }}
         className="bg-red-50 top-5 right-0 -z-10 absolute max-sm:h-[250px]  max-sm:w-[250px] w-[450px] h-[450px]"
       ></div>
      <img
          className="w-[560px] max-sm:w-[260px] z-10 absolute right-0  max-sm:top-20 top-24 overflow-hidden "
          src={veg3}
          alt=""
        />
    </div>
  );
};
