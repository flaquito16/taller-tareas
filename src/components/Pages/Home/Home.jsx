import React, { useContext, useEffect } from 'react'
import { NavBar } from '../NavBar/NavBar'
import './Home.css'
import { Header } from '../../layouts/Header/Header'
import {Filter} from '../../Filter/Filter'
import { Main } from '../../layouts/Main/Main'
import { Footer } from '../../layouts/Footer/Footer'
import { tasksContext } from '../../Context/Context'



export const Home = () => {
const otherContext = useContext(tasksContext)

  useEffect(() => {
    
  }

  )

  return (
    <>
    <NavBar/>
    <Header/>
    <Filter/>
    <Main/>
    <Footer/>
    </>
  )
}
