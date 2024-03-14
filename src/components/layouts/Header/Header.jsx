import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='divTitle'>
    <p className='title'>Titulo de la tareas:</p>    
    <input className='input1' type="text" placeholder='titulo' />
    </div>
    <div className='divDescription'>
    <p className='description'>Descripcion de la tarea:</p>
    <input className='input2' type="text" placeholder='descripcion' />
    </div>
    <button>Crear</button>

    </div>
        <div className='content'>
    <p className='work'>usted tiene dos tareas hechas y le faltan mas tareas</p>
    <hr />
    </div>
    
    </>
  )
}
