import React, { useEffect, useRef} from 'react'
import { Layoud } from '../componets/ComponetDefault/Layoud'
import Header from '../componets/ComponetDefault/Header'
import { GetCityData } from '../service/CityData'
import { CityCard } from '../componets/CityCard'
import { useSelector,useDispatch } from 'react-redux'
import { filterXname, load } from '../Redux/Actions/actions'



export const Cities  = () => {
  // const [CTS, setCTS]= useState([])
  // const [filtrado, setfiltrado]= useState([])
  const inputBusqueda = useRef(null)


  const  {all, filtered, search} = useSelector((store) => store.cities)

  console.log(filtered);
  console.log(search);


  const dispatch = useDispatch();


  useEffect(() => {
    if (all.length == 0) {
      GetCityData().then((data) => {
        dispatch(load(data));
      });
    }
  }, []);

  const e =()=>{
    dispatch(filterXname(inputBusqueda.current.value))
  }

  
  


  const CTSCard = filtered.map((CT)=>(
    <CityCard key={CT._id} CT={CT} />
  ))


  return (
    <Layoud >
      <div className='bg-gradient-to-b from-indigo-300 via-pink-300 to-amber-200'> 
        <div className="">
        <Header></Header>
        </div>
        <search className='w-full flex justify-center mt-5 '>
          <input 
          type='text'
          placeholder='Example: New York'
          className='outline-none bg-slate-700 text-white w-2/3 rounded-lg pl-3 h-8 md:h-10 xl:h-12 2xl:h-20  2xl:text-3xl'
          onInput={e}
          ref={inputBusqueda}
          defaultValue={search}
          />
        </search>
        <section className="flex flex-wrap justify-center">
        {filtered.length > 0 && CTSCard}
        </section>
      </div>
    </Layoud>
    )
}