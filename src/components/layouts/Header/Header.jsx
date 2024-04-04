import React, { useState } from 'react'
import {useContext} from 'react'
import './Header.css'
import { tasksContext } from '../../Context/Context'
import { v4 as uuidv4 } from 'uuid'
import { Info } from '../../Info/Info'


export const Header = () => {
  const [titleTask, setTitleTask] = useState ('')
  const [descriptionTask, setDescriptionTask] = useState ('')
  const context = useContext(tasksContext)
  const handleCreateTask = () => {
  
    const itemTask = {
      id: uuidv4(),
      title: titleTask,
      description: descriptionTask,
      state: false  
    }
  
    let listTasks = [...context.tasks, itemTask]
    let listTasks2 = [...context.filterTask, itemTask]
    context.setTasks(listTasks)
    context.setfilterTask(listTasks2)
    container = setfilterTask(listTasks2)
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
    <Info/>
    <hr />
    </div>  

    </>
  )
}
