import React from 'react'
import { Layoud } from '../componets/ComponetDefault/Layoud'
import { BGM } from '../componets/BG-2'
import {BGH} from "../componets/BG-1"
import Header from '../componets/ComponetDefault/Header'
import Hero from '../componets/Hero'



export const Home = () => {
  return (
    <Layoud>
      <BGH>
        <Header></Header>
        <Hero></Hero>
      </BGH>
      <BGM></BGM>
    </Layoud>
  )
}
export default Home;