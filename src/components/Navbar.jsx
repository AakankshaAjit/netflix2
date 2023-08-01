import React from 'react'

const Navbar = () => {
  return (
   <nav className='w-full h-20 bg-gradient-to-b from-black to-gray-800 flex justify-center items-center'>
    <div className='w-[90%] text-white h-full flex justify-between items-center'>
 <div className='w-[50%] flex justify-evenly ' >
    <span className='text-2xl font-bold text-red-500'>NETFLIX</span>
    <span className='cursor-pointer'>Home</span>
    <span className='cursor-pointer'>About</span>
    <span className='cursor-pointer'> Populars</span>
    <span className='cursor-pointer'>TV shows</span>
    <span className='cursor-pointer'>Filter</span>
 </div>



<div className='w-[10%] h-full justify-between flex items-center'>
<span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</span>
<span className='cursor-pointer'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>

</span>
<span className='cursor-pointer'>Account</span>
</div>

    </div>
   </nav>
  )
}

export default Navbar