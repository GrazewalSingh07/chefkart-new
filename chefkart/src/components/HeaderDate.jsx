import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import Calendar from "react-calendar";
import {  IconButton, Popover, TextField,   } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import { BsAlarm } from "react-icons/bs";
import moment from "moment/moment";
import Divider from '@mui/material/Divider';
 

export const HeaderDate = () => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  const [startTime, onChangestartTime] = useState('10:30');
  const [endTime, onChangeendTime] = useState('12:30');
  const [openClock, setOpenClock] = useState(false);
 

  const [anchorElClock, setAnchorElClock] = React.useState(null);

  const handleClickClock = (event) => {
    setAnchorElClock(event.currentTarget);
    setOpenClock((previousOpen) => !previousOpen);
  };
 
  

  return (
    <div className="h-[100px] ">
      <div className="bg-black  h-[50px] w-full relative my-5">
        <div className=" bg-white items-center left-[50%] right-[50%] top-16  -translate-x-[50%] -translate-y-[50%] absolute w-[90%] m-auto shadow-md rounded-md py-4 px-2 flex justify-between">
          <div className="flex items-center">
            <IconButton onClick={handleClick}>
              <SlCalender className="text-black" />
            </IconButton>
            <p className="font-semibold px-4">{moment(value).format("LL")}</p>
          </div>
          {/* <Divider orientation="vertical"/> */}
          <div className="h-[20px] w-[1px] bg-slate-500"></div>
          <div className="flex items-center">
            <IconButton onClick={handleClickClock}>
              <BsAlarm className="text-black" />
            </IconButton>
            <p className="font-semibold px-4">{startTime}-{endTime}</p>
          </div>
        </div>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClick}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            >
             <Calendar onChange={onChange} value={value} />
            </Popover>
        
            <Popover
            id={id}
            open={openClock}
            anchorEl={anchorElClock}
            onClose={handleClickClock}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            
            >
           <div className="p-4  ">
           <TextField onChange={(e)=>onChangestartTime(e.target.value)} value={startTime} id="time" type="time" />;
           
            
           <TextField onChange={(e)=>onChangeendTime(e.target.value)} value={endTime} id="time" type="time"   />;
         
           </div>
           
            </Popover>
            
     
      </div>
    </div>
  );
};
