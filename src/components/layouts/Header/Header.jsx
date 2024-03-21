import React, { useState } from 'react'
import {useContext} from 'react'
import './Header.css'
import { tasksContext } from '../../Context/Context'
import { ItemsTask } from '../../ItemsTask/ItemsTask'



export const Header = () => {
  const [taskTitle, setTaskTitle] = useState ('')
  const [taskDescription, setTaskDescription] = useState ('')
  const context = useContext(tasksContext)
  const handleCreateTask = () => {
  
    const ItemTask = {
      _id: 1,
      title: taskTitle,
      description: taskDescription,
      state: false  
    }
  
    let listTasks = [...context.tasks, ItemTask]
    context.setTasks(listTasks)
  }
  return (
    <>
    <div className='header'>
        <div className='divTitle'>
    <p className='title'>Titulo de la tareas:</p>    
    <input onChange={event=>setTaskTitle[event.target.value]}  type="text" placeholder='titulo' id='title' />
    </div>
    <div className='divDescription'>
    <p className='description'>Descripcion de la tarea:</p>
    <input  onChange={event=>setTaskDescription[event.target.value]}  type="text" placeholder='descripcion' id='description' />
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
