import React, { useEffect, useState } from 'react'
import { Layoud } from '../componets/ComponetDefault/Layoud'
import Header from '../componets/ComponetDefault/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { GetCityId } from '../service/CityData'
import { Loading } from '../componets/ComponetDefault/Loading'
import Swal from 'sweetalert2'
import { Itinerary } from '../componets/Itinerary'

export const Details = () => {
    const params= useParams()
    const [Ct ,setCt] = useState({})
    const [loading , setloading ] = useState(true)
    const navegate = useNavigate()


    useEffect (()=>{
        GetCityId(params.id).then((res ) => {
            if (res.name) {
                setCt(res)
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: "City Not Available" 
                  })
                  navegate("/Cities")
            }
        }).finally(()=>setloading(false))
    },[])
     


  return(
    <>
     {loading ? (<Loading></Loading>): (
    <div className='bg-gradient-to-b from-indigo-300 via-pink-300 to-amber-200'>
        <Layoud>
            <Header>
            </Header>
            <div className="flex flex-wrap mt-5 justify-center">
                <img className="w-full h-1/2  rounded-md  md:w-[350px] md:h-[300px] lg:w-1/2 lg:h-1/2 " src={Ct.image} alt={Ct.name}/>
                <div className="ml-4 md:w-[45%]">
                    <h2 className="text-center font-bold text-4xl xl:text-6xl 2xl:text-8xl">{Ct.name}</h2>
                    <h2 className="font-bold text-3xl xl:text-4xl 2xl:text-7xl">{Ct.country}</h2>
                    <h3 className="font-bold text-2xl xl:text-3xl 2xl:text-5xl">{Ct.language}</h3>
                    <h4 className="font-bold text-black xl:text-xl 2xl:text-5xl">{Ct.currency}</h4>
                    <p className='xl:text-2xl 2xl:text-4xl'>{Ct.description}</p>
                </div>
                {Ct.itineraries.length > 0 && <Itinerary data ={Ct.itineraries}name={Ct.name} ></Itinerary>}
            </div>
        </Layoud>
    </div>
    )
    }
    </>

   )
}
