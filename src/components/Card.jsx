import React from 'react'

const Card = ({title, overview, popularity}) => {
  return (
   <div className="flex text-white bg-[url(https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60)] bg-center bg-no-repeat bg-cover h-72 bg-white rounded-lg m-5 flex-col justify-center gap-4 w-96 p-4">
<span className='text-3xl font-bold w-80'>{(title).slice(0,11)}</span>
<span className='text-sm w-80'>{(overview).slice(0,100)}</span>
<span className='text-red-600 text-sm w-80'>{popularity}</span>

   </div>
  )
}

export default Card