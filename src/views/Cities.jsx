import React, { useEffect, useState, useRef} from 'react'
import { Layoud } from '../componets/ComponetDefault/Layoud'
import Header from '../componets/ComponetDefault/Header'
import { GetCityData } from '../service/CityData'
import { CityCard } from '../componets/CityCard'
import { BGH } from '../componets/BG-1'



export const Cities  = () => {
  const [CTS, setCTS]= useState([])
  const [filtrado, setfiltrado]= useState([])
  const inputBusqueda = useRef(null)


  useEffect(()=>{GetCityData().then((data) =>{
    setCTS(data)
    setfiltrado(data) 
  })
  },[])


  const e =()=>{
   const fil = filterXname ( CTS , inputBusqueda.current.value)
   setfiltrado(fil)
  }

  
  const filterXname = (lista, value) => lista.filter((ct) => ct.name.trim().toLowerCase().startsWith(value.trim().toLowerCase()))
  


  const CTSCard = filtrado.map((CT)=>(
    <CityCard key={CT._id} CT={CT} />
  ))


  return (
    <Layoud >
      <BGH>
      <div className="bg-gradient-to-b from-indigo-600 via-pink-500 to-amber-300">
       <Header></Header>
      </div>
      <search className='w-full flex justify-center mt-5 '>
        <input 
        type='text'
        placeholder='Example: New York'
        className='outline-none text-black w-2/3 rounded-lg pl-3 h-8 md:h-10 xl:h-12 2xl:h-20  2xl:text-3xl'
        onInput={e}
        ref={inputBusqueda}
        />
      </search>
      <section className="flex flex-wrap justify-center">
       {filtrado.length > 0 && CTSCard}
      </section>
      </BGH>
    </Layoud>
    )
}