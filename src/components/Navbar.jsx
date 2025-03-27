import React from 'react';
import appleImg from '../../public/assets/images/apple.svg';
import searchImg from '../../public/assets/images/search.svg';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className=' flex w-full screen-max-width rounded-full px-5 py-2 items-center'>
        <img src={appleImg} alt="Apple" width={18} height={14}/>
        <div className='flex flex-1 justify-center'> 
            {["Phone", "Watch", "Music", "Support"].map((item, index) => {
                return <div key={index} className='px-5 text-sm text-gray hover:text-white cursor-pointer animation-all '>{item}</div>
            })}
        </div>
        <img src={searchImg} alt="Search" width={18} height={14}/>
      </nav>
    </header>
  );
};
export default Navbar;
