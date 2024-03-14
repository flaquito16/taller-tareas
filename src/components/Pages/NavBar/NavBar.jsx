import React from 'react'
import logo from '../../../assets/react.png'
import './NavBar.css'

export const NavBar = () => {
  return (
    <>
    <div className='nav'>
    <h2 className='list'>Lista de Tareas</h2>
    <img className='react' src={logo} alt="react" />
    </div>
    </>
  )
}
