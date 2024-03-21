import React, { useState } from 'react'
import {useContext} from 'react'
import './Header.css'
import { tasksContext } from '../../Context/Context'



export const Header = () => {
  const [titleTask, setTitleTask] = useState ('')
  const [descriptionTask, setDescriptionTask] = useState ('')
  const context = useContext(tasksContext)
  const handleCreateTask = () => {
  
    const itemTask = {
      _id: 1,
      title: titleTask,
      description: descriptionTask,
      state: false  
    }
  
    let listTasks = [...context.tasks, itemTask]
    context.setTasks(listTasks)
  }
  return (
    <>
    <div className='header'>
        <div className='divTitle'>
    <p className='title'>Titulo de la tareas:</p>    
    <input onChange={event=>setTitleTask(event.target.value)}  type="text" placeholder='titulo' id='title' />
    </div>
    <div className='divDescription'>
    <p className='description'>Descripcion de la tarea:</p>
    <input  onChange={event=>setDescriptionTask(event.target.value)}  type="text" placeholder='descripcion' id='description' />
    </div>
    <button onClick={handleCreateTask}>Crear</button>

    </div>
        <div className='content'>
    <p className='work'>usted tiene dos tareas hechas y le faltan mas tareas</p>
    <hr />
    </div>  

    </>
  )
}
