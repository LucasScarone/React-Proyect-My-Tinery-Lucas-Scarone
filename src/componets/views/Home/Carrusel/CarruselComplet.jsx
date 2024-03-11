import React, { useState } from 'react'
import { CarruselSlimes } from './CarruselSlimes'
import { citys } from "../../../../data/data"


export const CarruselComplet = () => {

    const datos= citys.slice(0, 12)
    const divArray =() =>{
        const array1= datos.slice(0,4)
        const array2=datos.slice(4,8)
        const array3=datos.slice(8,12)
        return [array1,array2,array3]
    }
    const Slimes=divArray(datos)
    const[Citys, setCitys]=useState(Slimes[0])
    const [Indice, setIndice]= useState(0)
    
    

    const next =()=>{
        let slimes = Indice === 2 ? 0 : Indice +1
        setIndice(slimes)
        setCitys(Slimes[slimes])
    }
    const prev =()=>{
        let slimes = Indice === 0 ? 2 : Indice -1
        setIndice(slimes)
        setCitys(Slimes[slimes])
    }


  return (
    <div className='w-11/12 flex justify-between items-center'>
        <button onClick={prev} className="flex justify-star items-center  w-1/6 h-[200px] lg:h-[280px] xl:w-[120px] xl:h-[400px] "><img className="w-[50px] h-2/3 lg:w-[60px] xl:w-[80px] 2xl:w-[100px]" src="./flecha.izquierda.png" alt=""/></button>
        <CarruselSlimes dat={Citys}></CarruselSlimes>
        <button onClick={next} className="flex justify-end items-center h-[200px] w-1/6 lg:h-[280px] xl:w-[120px] xl:h-[400px]"><img className="w-[50px] h-2/3 lg:w-[60px]  xl:w-[80px] 2xL:w-[100px]" src="./flecha.derecha.png" alt=""/></button>
    </div>
  )
}
