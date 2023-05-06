import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import Logo from "../assets/Hologrart.png";

const Footer = () => {
  return (
    <div className='grid grid-cols-3 px-3 py-2'>
      <div className='flex justify-start items-end'>
        <div className='hover:w-9 hover:h-9 w-8 h-8 rounded-full bg-white flex justify-center items-center mr-2 cursor-pointer shadow-md shadow-purple-700 transition-all duration-150'><LinkedInIcon sx={{ fontSize: 20 }} /></div>
        <div className='hover:w-9 hover:h-9 w-8 h-8 rounded-full bg-white flex justify-center items-center mr-2 cursor-pointer shadow-md shadow-purple-700 transition-all duration-150'><InstagramIcon sx={{ fontSize: 20 }} /></div>
        <div className='hover:w-9 hover:h-9 w-8 h-8 rounded-full bg-white flex justify-center items-center mr-2 cursor-pointer shadow-md shadow-purple-700 transition-all duration-150'><TwitterIcon sx={{ fontSize: 20 }} /></div>
      </div>

      <p className='text-white h-full flex items-end justify-center text-xs sm:text-md'>All rights are reserved, © 2023</p>

      <div className='flex justify-end items-end'>
        <img className='w-12 rounded-md' src={Logo} alt="hologrart_metaverse_logo" />
      </div>
    </div>
  )
}

export default Footer