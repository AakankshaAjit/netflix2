import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Axios  from 'axios'
import Card from '../components/Card'
const API=  "https://api.themoviedb.org/3/movie/upcoming?api_key=7e5122f42b3d47b2f9c1deaf4e1d2214"

import Loader from '../components/Loader'

const Home = () => {

    const[FirstMovie,SetFirstMovie] = useState([])
    const[SecondMovie,SetSecondMovie] = useState([])
    
    const[Poster,SetPoster] = useState({})
    const[Load,SetLoad] = useState(false)

    const fetchData =async()=>{
        SetLoad(true)
await Axios.get(API)
.then((res)=>{
    console.log(res.data.results)
const myMovies  = res.data.results

const StoreData = JSON.stringify(res.data.results) 

localStorage.setItem('mydata',StoreData)
let fmovies =[]
let smovies =[]


for(let i=0; i<10 ; i++){

    fmovies.push(myMovies[i])

}

for(let i=10; i<19 ; i++){

    smovies.push(myMovies[i])

}





SetFirstMovie(fmovies)
SetSecondMovie(smovies)


    SetPoster(res.data.results[5])
})
.catch((err)=>console.log(err))

SetLoad(false)

    }

useEffect(()=>{

if(localStorage.mydata){


    // const ActulaData = localStorage.getItem('mydata')
    // console.log(ActulaData)
    // const StoreData = JSON.parse(ActulaData) 

    // let fmovies =[]
    // let smovies =[]
    
    // for(let i=0; i<10 ; i++){
    
    //     fmovies.push(ActulaData[i])
    
    // }
    
    // for(let i=10; i<19 ; i++){
    
    //     smovies.push(ActulaData[i])
    
    // }
    
    
    
    // SetFirstMovie(fmovies)
    // SetSecondMovie(smovies)
    
        // SetPoster(ActulaData[1])
        fetchData()

}

else{
    fetchData()
}


},[])

  return (
  <>
  

  {Load ? <Loader/>:
  
   <>
   
   <Navbar/>
   <section className='w-full h-screen justify-start items-center flex bg-black'>
<img className='w-full z-20  absolute h-full opacity-50 object-cover' src="https://images.unsplash.com/photo-1690695585525-8610507695de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />


<div className="flex flex-col z-50  pl-10 justify-center gap-10 text-white w-1/2 h-3/4">
<span className='font-bold text-4xl '>{Poster.title}</span>
<span>{Poster.overview}.</span>

<div className='flex gap-4'>
    <button className='w-44 h-10 flex justify-center items-center bg-white text-black rounded-lg'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg>
Play</button>
    <button className='w-44 h-10 bg-gray-500 text-white rounded-lg flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
 {Poster.popularity}</button>
</div>

</div>


   </section>
   <section className='w-full h-screen justify-center items-center bg-gradient-to-t from-gray-900 to-gray-500'>


   <div className='w-full flex h-80 justify-start  overflow-x-scroll items-center '>
 {FirstMovie &&  FirstMovie.map((e,index)=> <Card key={index} title={e.title} overview={e.overview} popularity={e.popularity}/> )
}
</div>




<div className='w-full flex h-80 justify-start  overflow-x-scroll items-center '>

 {SecondMovie &&  SecondMovie.map((e,index)=> <Card  key={index} title={e.title} overview={e.overview} popularity={e.popularity}/> )
}
</div>






   </section>
    
   </>


  }
  </>
  )
}

export default Home