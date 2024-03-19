import React from 'react'

export const Itinerary = (data, name) => {

    console.log(data);



  return (
    <div className='mt-5'>
        <div className="mx-auto max-w-lg bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 border-b">
                <h1 className="text-xl font-semibold text-gray-800 flex ">Itinerario de Viaje - París</h1>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                <div>Publicado por: <span className="font-medium">Nombre del Autor</span></div>
                <div>Precio: <span className="text-yellow-500">&#9733; &#9733; &#9733; &#9733; &#9734;</span></div>
                <div>Duración: 7 días</div>
                <div>Temáticas: #Cultura #Gastronomía #Historia</div>
            </div>
        </div>
         <div className="md:grid md:grid-cols-3 md:gap-4 md:p-4 ">
          <div className="border rounded-md overflow-hidden">
            <img src="playa de noche.jpg" alt="Actividad 1" className="w-full"/>
          <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">Nombre de la Actividad</h2>
          </div>
          </div>
          <div className="border rounded-md overflow-hidden">
          <img src="playa de tare.jpg" alt="Actividad 2" className="w-full"/>
          <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">Nombre de la Actividad</h2>
          </div>
          </div> 
          <div className="border rounded-md overflow-hidden">
          <img src="playa de tare.jpg" alt="Actividad 2" className="w-full"/>
          <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">Nombre de la Actividad</h2>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}
