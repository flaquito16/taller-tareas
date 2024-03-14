import React from 'react'
import './Filter.css'

export const Filter = () => {
  return (
    <>
    <div className='filter'>
      <p className='fil'>filtrar:</p>
      <select name="nn" id="">
        <option value="text">todas</option>
        <option value="text">todas las tareas no echas</option>
        <option value="text">todas las tareas archivadas</option>
      </select>
      </div>
    </>
  )
}
