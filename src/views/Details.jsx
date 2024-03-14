import React, { useEffect, useState } from 'react'
import { Layoud } from '../componets/ComponetDefault/Layoud'
import Header from '../componets/ComponetDefault/Header'
import { useNavigate, useParams } from 'react-router-dom'
import { GetCityId } from '../service/CityData'
import { Loading } from '../componets/ComponetDefault/Loading'
import Swal from 'sweetalert2'

export const Details = () => {
    const params= useParams()
    const [Ct ,setCt] = useState({})
    const [loading , setloading ] = useState(true)
    const navegate = useNavigate()


    useEffect (()=>{
        GetCityId(params.id).then((res ) => {
            console.log(res);
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
        <Layoud>
            <Header>
            </Header>
            <div className ="w-full min-h-screen flex flex-col text-white">
                <div className ="flex grow flex-wrap items-center justify-center bg-gradient-to-b from-black via-indigo-500 to-purple-500">
                    <main className =" flex-wrap ">
                        <div className ="flex flex-wrap">
                            <img className ="w-full h-1/2 md:pl-2  md:w-[350px] md:h-[300px] lg:w-1/2 lg:h-1/2" src={Ct.image} alt={Ct.name}/>
                            <div className ="px-5 md:w-1/2">
                                <h2 className ="text-center font-bold text-3xl">{Ct.name}</h2>
                                <h3 className ="font-bold text-2xl">{Ct.country}</h3>
                                <h4 className ="font-bold text-white">{Ct.country}</h4>
                                <p>{Ct.overview}</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Layoud>
    )
    }
    </>

   )
}
