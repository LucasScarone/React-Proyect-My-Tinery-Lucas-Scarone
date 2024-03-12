import React from 'react'

export const CityCard = ({CT}) => {
  return (
    <article className="w-2/4 m-3 md:w-2/6 lg:w-1/4 lg:h-[220px] 2xl:h-[390px] ">
        <img className="w-full h-[125px] object-cover md:h-[165px] lg:h-[155px] xl:h-[170px] 2xl:h-[320px] 2xl:text-3xl rounded-t-2xl" src= {CT.image} alt=""/>
        <footer className="text-center bg-white opacity-75 backdrop-blur-sm line-clamp-2 rounded-b-2xl xl:text-xl 2xl:text-3xl"> 
          <h2 className="font-semibold" >{CT.country}</h2>
          <h3>{CT.name} </h3>
        </footer>
    </article>   
    )
}
