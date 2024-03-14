import React from 'react'
import './Main.css'
import { ItemsTask } from '../../ItemsTask/ItemsTask'

export const Main = () => {
  return (
    <>
    <main>
      <div  className='Items'>
    <ItemsTask content='tareas' />
    <ItemsTask content='tareas' />
    <ItemsTask content='tareas' />
    <ItemsTask content='tareas' />
    </div>
    <div className='check'>
    <input type="checkbox" name="" id="check" />
    <input type="checkbox" name="" id="check" />
    <input type="checkbox" name="" id="check" />
    <input type="checkbox" name="" id="check" />
    </div>
    </main>
    
    </>
  )
}
