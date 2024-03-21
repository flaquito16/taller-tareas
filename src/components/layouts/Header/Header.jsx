import React, { useState } from 'react'
import {useContext} from 'react'
import './Header.css'
import { tasksContext } from '../../Context/Context'



export const Header = () => {
  const [taskTitle, settaskTitle] = useState ('')
  const [taskDescription, settaskDescription] = useState ('')
  const context = useContext(tasksContext)
  const handleCreateTask = () => {
  
    const ItemsTask = {
      _id: 1,
      title: taskTitle,
      description: taskDescription,
      state: false  
    }
  
    let listTasks = [...context.tasks, ItemsTask]
    context.setTasks(listTasks)
  }
  return (
    <>
    <div className='header'>
        <div className='divTitle'>
    <p className='title'>Titulo de la tareas:</p>    
    <input className='taskTitle' type="text" placeholder='titulo' />
    </div>
    <div className='divDescription'>
    <p className='description'>Descripcion de la tarea:</p>
    <input className='taskDescription' type="text" placeholder='descripcion' />
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
