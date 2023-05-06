import React from 'react';

const Navbar = ({ isContact, setIsContact }) => {
  return (
    <div className='flex justify-between text-white px-3 py-5'>
        <div>
          <button onClick={() => setIsContact(!isContact)} className='contact font-extrabold italic text-[16px] py-2 px-4 sm:py-3 sm:px-8 bg-[#9320D9] rounded-lg sm:rounded-xl shadow-xl text-sm sm:text-md'>
            {
              !isContact ? "Contact" : "x"
            }
          </button>
          
          {/* Little Circles */}
          <div className='circle1'></div>
          <div className='circle2'></div>
          <div className='circle3'></div>
          <div className='circle4'></div>
        
        </div>

        <button className='font-extrabold italic text-[16px] py-2 px-4 sm:py-3 sm:px-8 bg-[#5865F2] rounded-xl shadow-xl text-sm sm:text-md'>Join Community</button>
    </div>
  )
}

export default Navbar