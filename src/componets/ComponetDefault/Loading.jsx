import React from 'react'
import { Layoud } from './Layoud'
import Header from './Header'

export const Loading = () => {
  return (
    <>
    <Layoud>
        <div className='flex grow justify-center bg-gradient-to-b from-indigo-300 via-pink-300 to-amber-200'>
        <Header></Header>

        <h1 className=' text-center text-black text-2xl'>Loading</h1>
        </div>
    </Layoud>
    </>
    )
}
